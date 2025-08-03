import { loadVillage } from './main.js';
import { Storage } from './resources.js';

export class ContestEngine {
  constructor(contestMap, contestTextEl, choiceBoxEl, type = 'ai') {
    this.contestMap = contestMap;
    this.contestText = contestTextEl;
    this.choiceBox = choiceBoxEl;
    this.type = type;
    this.questionOrder = [];
    this.currentQuizIndex = 0;
    this.incorrectCount = 0;
    this.resources = Storage.get("resources");
  }

  start() {
    const questionKeys = Object.keys(this.contestMap[this.type].questions);
    this.questionOrder = questionKeys;
    this.currentQuizIndex = 0;
    this.initDialogue();
  }

  initDialogue() {
    this.loadNextQuiz();
    // this.choiceBox.appendChild(nextBtn);
  }

  updateScoreBar(isCorrect) {
    const scoreFill = document.getElementById("score-fill");
    const total = this.questionOrder.length;

    // Calculate height increment per question
    const increment = 100 / total;

    // Get current heights as numbers
    const currentCorrectHeight = parseFloat(scoreFill.style.height) || 0;

    if (isCorrect) {
      const newCorrectHeight = currentCorrectHeight + increment;
      scoreFill.style.height = `${newCorrectHeight}%`;
      scoreFill.style.backgroundColor = "#0f62fe"; // Blue
    }
  }

  appendPlayerResponse(text) {
    this.contestText.innerHTML += `<p class="player-response">You: <strong>${text}</strong></p>`;
  }

  appendExplanation(isCorrect, text) {
    const resultText = isCorrect ? "✅ Correct!" : "❌ Not quite!";
    this.contestText.innerHTML += `<p><i>${resultText} ${text}</i></p><br><br>`;
    this.currentQuizIndex++;

    const nextBtn = document.createElement("button");
    nextBtn.innerText = "Next";
    nextBtn.classList.add("option");
    nextBtn.onclick = () => this.loadNextQuiz();
    this.choiceBox.appendChild(nextBtn);
  }

  appendWarning(text) {
    this.contestText.innerHTML += `<p class="warning"><strong>Warning:</strong> ${text}</p>`;
  }

  updateDialogue(questionKey) {
    // Clear current dialogue & choices
    this.contestText.innerHTML = "";
    this.choiceBox.innerHTML = "";

    console.log(questionKey);
    const questionData = this.contestMap[this.type].questions[questionKey];
    this.contestText.innerHTML = `<p>${questionData.question}</p>`;

    questionData.options.forEach(optionText => {
      const btn = document.createElement("button");
      btn.innerText = optionText;
      btn.classList.add("option");
      btn.onclick = () => {
        this.appendPlayerResponse(optionText);
        const isCorrect = optionText === questionData.answer;
        if (!isCorrect) this.incorrectCount++;
        this.updateScoreBar(isCorrect); 

        this.choiceBox.innerHTML = "";
        this.appendExplanation(isCorrect, questionData.explanation);
      };
      this.choiceBox.appendChild(btn);
    });
  }

  loadNextQuiz() {
    if (this.currentQuizIndex < 5) {
      this.updateDialogue(this.questionOrder[this.currentQuizIndex]);
    } else {
      this.contestText.innerHTML = `<p>🎉 You've completed all the questions!</p>`;
      this.choiceBox.innerHTML = ""; // Disable buttons after answering

      const backBtn = document.createElement("button");
      backBtn.innerText = "Back to village";
      backBtn.classList.add("option");
      backBtn.onclick = () => loadVillage();
      this.choiceBox.appendChild(backBtn);
      // Optional: trigger rewards, continue level, etc.
    }
  }
}
