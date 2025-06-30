// // game controller
// import { Player } from './Player.js';
// import { Village } from './dialog.js';
// // import { QuizManager } from './QuizManager.js';

// export class Game {
//   constructor(containerId) {
//     this.container = document.getElementById(containerId);
//     this.player = new Player('Player1');
//     this.village = new Village('MyVillage');
//     // this. = new QuizManager(this);
//   }

//   init() {
//     this.container.innerHTML = `<h1>Welcome, ${this.player.name}!</h1>`;
//     // this.quizManager.startQuiz();
//   }

//   onCorrectAnswer() {
//     this.village.gainResources(10);
//     this.village.checkLevelUp();
//     // this.quizManager.nextQuestion();
//   }

//   onWrongAnswer() {
//     this.container.innerHTML += `<p style="color:red;">Wrong answer. Try again!</p>`;
//     // this.quizManager.nextQuestion();
//   }
// }