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
    this.initDialogue();
  }

  initDialogue() {
    const keyPoints = this.upgradeMap[this.building][this.level].keyPoints;

    // Clear any previous content
    this.upgradeText.innerHTML = "";

    let count = 0;
    // Append each point to the upgrade text container
    keyPoints.forEach(point => {
      count+=1;
      const p = document.createElement('p');
      p.innerHTML = `<strong>${count}. </strong>` + point;
      this.upgradeText.appendChild(p);
    });

    console.log(this.currentQuizIndex);
    const nextBtn = document.createElement("button");
    nextBtn.innerText = "Next";
    nextBtn.classList.add("choice");
    nextBtn.onclick = () => this.loadNextQuiz();
    this.choiceBox.appendChild(nextBtn);
  }

  appendPlayerResponse(text) {
    this.upgradeText.innerHTML += `<p class="player-response">You: <strong>${text}</strong></p>`;
  }

  appendExplanation(isCorrect, text) {
    const resultText = isCorrect ? "✅ Correct!" : "❌ Not quite!";
    this.upgradeText.innerHTML += `<p><i>${resultText} ${text}</i></p><br><br>`;
    this.currentQuizIndex++;

    const nextBtn = document.createElement("button");
    nextBtn.innerText = "Next";
    nextBtn.classList.add("choice");
    nextBtn.onclick = () => this.loadNextQuiz();
    this.choiceBox.appendChild(nextBtn);
  }

  appendWarning(text) {
    this.upgradeText.innerHTML += `<p class="warning"><strong>Warning:</strong> ${text}</p>`;
  }

  updateDialogue(quizKey) {
    // Clear current dialogue & choices
    this.upgradeText.innerHTML = "";
    this.choiceBox.innerHTML = "";

    console.log(quizKey);
    const quizData = this.upgradeMap[this.building][this.level].quizes[quizKey];
    this.upgradeText.innerHTML = `<p>${quizData.question}</p>`;

    Object.entries(quizData.options).forEach(([optionKey, optionText]) => {
      const btn = document.createElement("button");
      btn.innerText = optionText;
      btn.classList.add("choice");
      btn.onclick = () => {
        this.appendPlayerResponse(optionText);
        const isCorrect = optionKey === quizData.correctAnswer;
        if (!isCorrect) this.incorrectCount++;
        this.choiceBox.innerHTML = ""; // Disable buttons after answering
        this.appendExplanation(isCorrect, quizData.explanation);
      };
      this.choiceBox.appendChild(btn);
    });
  }

  loadVillagePage() {
    window.location.href = 'index.html';
  }
  loadNextQuiz() {
    console.log(this.currentQuizIndex);

    if (this.currentQuizIndex < this.questionOrder.length) {
      this.updateDialogue(this.questionOrder[this.currentQuizIndex]);
      console.log(this.questionOrder);
      console.log(this.currentQuizIndex);

    } else {
      this.upgradeText.innerHTML = `<p>🎉 You've completed all the questions!</p>`;
      
      this.choiceBox.innerHTML = ""; // Disable buttons after answering
      const backBtn = document.createElement("button");
      backBtn.innerText = "Back to village";
      backBtn.classList.add("choice");
      backBtn.onclick = () => this.loadVillagePage();
      this.choiceBox.appendChild(backBtn);
      // Optional: trigger rewards, continue level, etc.
    }
  }
}
