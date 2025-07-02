import { DialogueEngine } from './dialogueEngine.js';

let dialogueEngine = null;

export function initDialogue() {
  requestAnimationFrame(() => {
    const dialogueText = document.getElementById('dialogue-text');
    const choiceBox = document.querySelector('.choice-box');

    setTimeout(() => {
      console.log("wait 1 sec");
    }, 1000); // 10000 毫秒 = 10 秒

    if (!dialogueText || !choiceBox) {
      console.error('Dialogue DOM elements not found.');

      return;
    }

    import('./dialogueData.js').then(module => {
      const dialogueMap = module.dialogueMapData;
      dialogueEngine = new DialogueEngine(dialogueMap, dialogueText, choiceBox);
      dialogueEngine.start();
    });
  });
}
