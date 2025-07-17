export class UpgradeEngine {
  constructor(upgradeMap, upgradeTextEl, choiceBoxEl, building = 'aiCenter', level = 'level01') {
    this.upgradeMap = upgradeMap;
    this.upgradeText = upgradeTextEl;
    this.choiceBox = choiceBoxEl;
    this.building = building;
    this.level = level;
    this.questionOrder = [];
    this.currentQuizIndex = 0;
    this.incorrectCount = 0;
    this.resources = JSON.parse(localStorage.getItem("resources")) || {};
  }

  start() {
    const quizKeys = Object.keys(this.upgradeMap[this.building][this.level].quizes);
    this.questionOrder = quizKeys;
    this.currentQuizIndex = 0;
    this.updateDialogue(this.questionOrder[this.currentQuizIndex]);
  }

  appendPlayerResponse(text) {
    this.upgradeText.innerHTML += `<p class="player-response">You: <strong>${text}</strong></p><br>`;
  }

  appendExplanation(isCorrect, text) {
    const resultText = isCorrect ? "Correct!" : "Not quite!";
    this.upgradeText.innerHTML += `<p><i>${resultText} ${text}</i></p><br><br>`;

    const nextBtn = document.createElement("button");
    nextBtn.innerText = "Next";
    nextBtn.classList.add("next-button");
    nextBtn.onclick = () => this.loadNextQuiz();
    this.upgradeText.appendChild(nextBtn);
  }

  appendWarning(text) {
    this.upgradeText.innerHTML += `<p class="warning"><strong>Warning:</strong> ${text}</p>`;
  }

  updateDialogue(quizKey) {
    // Clear current dialogue & choices
    this.upgradeText.innerHTML = "";
    this.choiceBox.innerHTML = "";

    const quizData = this.upgradeMap[this.building][this.level].quizes[quizKey];
    this.upgradeText.innerHTML = `<p>${quizData.question}</p>`;

    Object.entries(quizData.options).forEach(([optionKey, optionText]) => {
      const btn = document.createElement("button");
      btn.innerText = optionText;
      btn.classList.add("option-button");
      btn.onclick = () => {
        this.appendPlayerResponse(optionText);
        const isCorrect = optionKey === quizData.correctAnswer;
        if (!isCorrect) this.incorrectCount++;
        this.appendExplanation(isCorrect, quizData.explanation);
        this.choiceBox.innerHTML = ""; // Disable buttons after answering
      };
      this.choiceBox.appendChild(btn);
    });
  }

  loadNextQuiz() {
    this.currentQuizIndex++;
    if (this.currentQuizIndex < this.questionOrder.length) {
      this.updateDialogue(this.questionOrder[this.currentQuizIndex]);
    } else {
      this.upgradeText.innerHTML = `<p>🎉 You've completed all the questions!</p>`;
      this.choiceBox.innerHTML = "";
      // Optional: trigger rewards, continue level, etc.
    }
  }
}
