// // Quiz engine
// import questions from './questions.json' assert { type: 'json' };

// export class QuizManager {
//   constructor(game) {
//     this.game = game;
//     this.questions = questions;
//     this.currentIndex = 0;
//   }

//   startQuiz() {
//     this.showQuestion();
//   }

//   showQuestion() {
//     if (this.currentIndex >= this.questions.length) {
//       this.game.container.innerHTML = `<p>You've completed the quiz!</p>`;
//       return;
//     }

//     const q = this.questions[this.currentIndex];
//     const html = `
//       <h2>Question ${this.currentIndex + 1}</h2>
//       <p>${q.question}</p>
//       ${q.options.map(opt => `<button>${opt}</button>`).join('')}
//     `;

//     this.game.container.innerHTML = html;

//     this.game.container.querySelectorAll('button').forEach(btn => {
//       btn.onclick = () => {
//         if (btn.textContent === q.answer) {
//           alert('Correct!');
//           this.game.player.incrementScore(10);
//           this.game.onCorrectAnswer();
//         } else {
//           alert('Incorrect.');
//           this.game.onWrongAnswer();
//         }
//       };
//     });
//   }

//   nextQuestion() {
//     this.currentIndex++;
//     this.showQuestion();
//   }
// }