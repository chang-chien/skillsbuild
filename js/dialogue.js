import { DialogueEngine } from './dialogueEngine.js';

let dialogueEngine = null;

export function init() {
  requestAnimationFrame(() => {

    setTimeout(() => {
      console.log("wait 1 sec");
    }, 1000);

    const dialogueText = document.getElementById('dialogue-text');
    const choiceBox = document.querySelector('.choice-box');
    const building = 'dataCenter';
    // TODO: change secton to section01 during the usability test
    const section = 'section06';

    if (!dialogueText || !choiceBox) {
      console.error('Dialogue DOM elements not found.');

      return;
    }

    import('./dialogueData.js').then(module => {
      const dialogueMap = module.dialogueMapData;
      dialogueEngine = new DialogueEngine(dialogueMap, dialogueText, choiceBox, building, section);
      dialogueEngine.start();
    });
  });
}
