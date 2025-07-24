import { refreshResourcesUI } from './resources.js';

const buildingToResource = {
  electricPlant: 'electricity',
  aiCenter: 'rawData', 
  dataCenter: 'dataPacket',
  defenceSystem: 'securityToken',
  computeNode: 'processingUnit'
}

export class DialogueEngine {
  // TODO: change secton to section01 durng the usability test
  constructor(dialogueMap, dialogueTextEl, choiceBoxEl, building = 'dataCenter', section = 'section06') {
    this.dialogueMap = dialogueMap;
    this.dialogueText = dialogueTextEl;
    this.choiceBox = choiceBoxEl;
    this.building = building;
    this.section = section;
    this.visited = [];
    this.incorrectCount = 0;
    this.quizFailed = false;
    // electricity, rawData, dataPacket, securityToken, processingUnit
    this.resources = JSON.parse(localStorage.getItem("resources"));
  }

  start() {
    this.updateDialogue('starter');
  }

  appendText(lines, speaker = 'Elder Ava') {
    lines.forEach(line => {
      this.dialogueText.innerHTML += `<p class="npc-response"><strong>${speaker}:</strong> ${line}</p>`;
    });
    this.dialogueText.scrollTop = this.dialogueText.scrollHeight;
  }

  appendPlayerResponse(text) {
    this.dialogueText.innerHTML += `<p class="player-response"><strong>You:</strong> ${text}</p>`;
    this.dialogueText.scrollTop = this.dialogueText.scrollHeight;
  }

  appendExplanation(isCorrect, text) {
    if (isCorrect === false) {
      this.dialogueText.innerHTML += `<p><i> ❌ Not quite! ${text}</i></p>`;
    } else if (isCorrect === true) {
      this.dialogueText.innerHTML += `<p><i> ✅ Correct! ${text}</i></p><br><br>`;
    }
    setTimeout(() => {
      console.log("wait 2 sec");
    }, 20000);
    this.dialogueText.scrollTop = this.dialogueText.scrollHeight;
  }

  appendWarning(text) {
    this.dialogueText.innerHTML += `<p class="warning"><strong>Warning:</strong> ${text}</p>`;
    this.dialogueText.scrollTop = this.dialogueText.scrollHeight;
  }

  updateResources(type, amount) {
    this.resources[type] += amount;
    localStorage.setItem('resources', JSON.stringify(this.resources));
    // Optionally display it on screen or store it in localStorage
    refreshResourcesUI(); 
  }

  updateDialogue(stateKey, explanation = null, isCorrect = null) {

    // Handle previous status 
    if (explanation) {
      this.appendExplanation(isCorrect, explanation);
    }

    if (isCorrect === false && this.incorrectCount == 1) {
      this.appendWarning("You already used up the chance, if you answer wrong again, you may need to start over again...<br><br>")
    }
    
    const state = this.dialogueMap[this.building][this.section][stateKey];
    const title = this.dialogueMap[this.building][this.section]['title'];
    const sectionName = this.dialogueMap[this.building][this.section]['sectionName'];
    explanation = state.explanation ?? null;
    isCorrect = null;

    if (!state) return;

    if (stateKey === 'starter') {
      this.dialogueText.innerHTML = '';
      this.dialogueText.innerHTML += `<p class="sectoinTitle"><strong>${title}</strong></p>`;
      this.dialogueText.innerHTML += `<p class="sectoinTitle"><strong>${sectionName}</strong></p>`;
      // this.choiceBox.innerHTML = '';
      this.visited.length = 0;
      this.incorrectCount = 0;
      this.quizFailed = false;
    }

    if (stateKey === 'village') {
      this.updateResources(buildingToResource[this.building], 10);  // ✅ Give player 10 resources
    }

    this.appendText(state.text);

    if (state.warning) {
      this.appendWarning(state.warning);
    }

    this.visited.push(stateKey);
    this.choiceBox.innerHTML = '';

    state.choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.classList.add('choice');
      btn.textContent = choice.label;
      this.choiceBox.appendChild(btn);

      btn.addEventListener('click', () => {
        
        this.appendPlayerResponse(choice.label);

        if (choice.skipTo) {
          this.showSkippedPath(stateKey, choice.skipTo);
        } else if (choice.next === 'backToVillage') {
          this.loadVillagePage();
        } else if (choice.next === 'nextSection') {

          // Update to the next section (you can customize how to determine the next section)
          // For example, if sections are named 'section01', 'section02', etc., increment the number:
          const currentSectionNum = parseInt(this.section.replace('section', ''), 10);
          const nextSectionNum = currentSectionNum + 1;
          this.section = `section${String(nextSectionNum).padStart(2, '0')}`;

          // Reset visited states for the new section
          this.visited.length = 0;

          // Start dialogue for the new section from 'starter'
          this.updateDialogue('starter');
        } else {

          if (choice.materialCost && this.resources.electricity < choice.materialCost) {
            this.appendWarning(`You do not have enough electricity to perform this action. You need ${choice.materialCost} electricity.`);
            // TODO: diary & arena need to be added and announced
            // TODO: maybe can give player a button to go to diary or arena
            this.appendText(["You can go to diary or arena to earn more electricity."]);

            this.choiceBox.innerHTML = '';
            const retryBtn = document.createElement('button');
            retryBtn.classList.add('choice');
            retryBtn.textContent = "Back to Village";
            retryBtn.addEventListener('click', () => {
              this.loadVillagePage();
            });
            this.choiceBox.appendChild(retryBtn);
            return;
          } else if (choice.materialCost) {
            this.updateResources("electricity", -choice.materialCost);
          }

          // Check answer correctness
          isCorrect = choice.isCorrect ?? null;

          if (isCorrect === false) {
            this.incorrectCount++;
          }

          // Too many incorrect -> fail
          if (this.incorrectCount > 1) {
            this.appendWarning("You’ve made too many mistakes in the trial. Return and try again after preparation.")
            this.choiceBox.innerHTML = '';
            const retryBtn = document.createElement('button');
            retryBtn.classList.add('choice');
            retryBtn.textContent = "Retry Quiz";
            retryBtn.addEventListener('click', () => {
              this.start();
              this.incorrectCount = 0;
              this.quizFailed = false;
            });
            this.choiceBox.appendChild(retryBtn);
            this.dialogueText.scrollTop = this.dialogueText.scrollHeight;
            return;
          }
          this.updateDialogue(choice.next, explanation, isCorrect);
        }
      });

      this.dialogueText.scrollTop = this.dialogueText.scrollHeight;
    });
  };

  showSkippedPath(fromState, toState) {
    const fullPath = ['starter', 'intro', 'guide', 'quiz01']; // 你完整的路徑順序陣列
    const fromIndex = fullPath.indexOf(fromState);
    const toIndex = fullPath.indexOf(toState);
    
    if (fromIndex === -1 || toIndex === -1 || toIndex <= fromIndex) return;

    // Clear the choice box first
    this.choiceBox.innerHTML = '';

    // Skipped the path and use appendText to display the NPC text, but do not display the player's response
    for (let i = fromIndex + 1; i <= toIndex; i++) {
      const stateKey = fullPath[i];
      const state = this.dialogueMap[this.building][this.section][stateKey];
      if (state) {
        this.appendText(state.text);
        this.visited.push(stateKey);
      }
      if (state.warning) {
        this.appendWarning(state.warning);
      }
    };

    // Display the option button for the target state (toState) in final
    const finalState = this.dialogueMap[this.building][this.section][toState];
    if (!finalState) return;

    finalState.choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.classList.add('choice');
      btn.textContent = choice.label;

      btn.addEventListener('click', () => {
        this.appendPlayerResponse(choice.label);
        if (choice.next === 'backToVillage') {
          this.loadVillagePage();
        } else {

          // check if need to spend electricity
          if (choice.materialCost && this.resources.electricity < choice.materialCost) {
            this.appendWarning(`You do not have enough electricity to perform this action. You need ${choice.materialCost} electricity.`);
            // TODO: diary & arena need to be added and announced
            // TODO: maybe can give player a button to go to diary or arena
            this.appendText(["You can go to diary or arena to earn more electricity."]);
            this.choiceBox.innerHTML = '';
            const retryBtn = document.createElement('button');
            retryBtn.classList.add('choice');
            retryBtn.textContent = "Back to Village";
            retryBtn.addEventListener('click', () => {
              this.loadVillagePage();
            });
            this.choiceBox.appendChild(retryBtn);
            return;
          } else if (choice.materialCost){
            this.updateResources("electricity", -choice.materialCost);
          }

          this.updateDialogue(choice.next);
        }
        this.dialogueText.scrollTop = this.dialogueText.scrollHeight;
      });

      this.choiceBox.appendChild(btn);
    });

    this.dialogueText.scrollTop = this.dialogueText.scrollHeight;
  }

  loadVillagePage() {
    window.location.href = 'index.html';
  }
}
