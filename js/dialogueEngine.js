export class DialogueEngine {
  constructor(dialogueMap, dialogueTextEl, choiceBoxEl) {
    this.dialogueMap = dialogueMap;
    this.dialogueText = dialogueTextEl;
    this.choiceBox = choiceBoxEl;
    this.visited = [];
  }

  start() {
    this.updateDialogue('section01_starter');
  }

  appendText(lines, speaker = 'Elder Ava') {
    lines.forEach(line => {
      this.dialogueText.innerHTML += `<p class="npc-response"><strong>${speaker}:</strong> ${line}</p>`;
    });
  }

  appendPlayerResponse(text) {
    this.dialogueText.innerHTML += `<p class="player-response"><strong>You:</strong> ${text}</p>`;
  }

updateDialogue(stateKey, playerResponse = null, isSkip = false) {
  const state = this.dialogueMap[stateKey];
  if (!state) return;

  if (stateKey === 'section01_starter') {
    this.dialogueText.innerHTML = '';
    this.visited.length = 0;
  }

  if (!isSkip && playerResponse) {
    this.appendPlayerResponse(playerResponse);
  }

  this.appendText(state.text);

  this.visited.push(stateKey);

  this.choiceBox.innerHTML = '';

  state.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.classList.add('choice');
    btn.textContent = choice.label;

    btn.addEventListener('click', () => {
      if (choice.skipTo) {
        this.appendPlayerResponse(choice.label);
        this.showSkippedPath(stateKey, choice.skipTo);
      } else if (choice.next === 'backToVillage') {
        this.loadVillagePage();
      } else {
        this.updateDialogue(choice.next, choice.label);
      }

      this.dialogueText.scrollTop = this.dialogueText.scrollHeight;
    });

    this.choiceBox.appendChild(btn);
  });
}


showSkippedPath(fromState, toState) {
  const fullPath = ['section01_starter', 'section01_intro', 'section01_guide', 'section01_quiz01']; // 你完整的路徑順序陣列
  const fromIndex = fullPath.indexOf(fromState);
  const toIndex = fullPath.indexOf(toState);

  if (fromIndex === -1 || toIndex === -1 || toIndex <= fromIndex) return;

  // Clear the choice box first
  this.choiceBox.innerHTML = '';

  // Skipped the path and use appendText to display the NPC text, but do not display the player's response
  for (let i = fromIndex + 1; i <= toIndex; i++) {
    const stateKey = fullPath[i];
    const state = this.dialogueMap[stateKey];
    if (state) {
      this.appendText(state.text);
      this.visited.push(stateKey);
    }
  }

  // Display the option button for the target state (toState) in final
  const finalState = this.dialogueMap[toState];
  if (!finalState) return;

  finalState.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.classList.add('choice');
    btn.textContent = choice.label;

    btn.addEventListener('click', () => {
      if (choice.skipTo) {
        this.appendPlayerResponse(choice.label);
        this.showSkippedPath(toState, choice.skipTo);
      } else if (choice.next === 'backToVillage') {
        this.loadVillagePage();
      } else {
        this.updateDialogue(choice.next, choice.label);
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
