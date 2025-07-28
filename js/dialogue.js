import { loadComponent } from './main.js';
import { DialogueEngine } from './dialogueEngine.js';

let dialogueEngine = null;

const buildingKeyMap = {
  aiCenter: 'ai',
  dataCenter: 'data',
  defenceSystem: 'defense',
  computeNode: 'compute'
};

// Initialize resources
localStorage.setItem("buildingUpgrade", JSON.stringify({
    aiCenter: true,
    dataCenter: false,
    defenceSystem: false,
    computeNode: false
}));

// Initialize localStorage defaults if missing
function initializeBuildingUpgrade() {
  if (!localStorage.getItem("buildingUpgrade")) {
    const defaultUpgradeState = {
      aiCenter: false,
      dataCenter: false,
      defenceSystem: false,
      computeNode: false
    };
    localStorage.setItem("buildingUpgrade", JSON.stringify(defaultUpgradeState));
  }
}

// Update buttons based on upgrade state
function applyUpgradeStatus() {
  const upgradeStatus = JSON.parse(localStorage.getItem("buildingUpgrade") || "{}");

  Object.entries(buildingKeyMap).forEach(([key, className]) => {
    const isEnabled = upgradeStatus[key];
    const button = document.querySelector(`.upgrade-button.${className}`);

    // const choiceBox = document.querySelector('.choice-box');
    const building = 'dataCenter';
    // TODO: change secton to section01 during the usability test
    const section = 'section06';

    if (button) {
      if (isEnabled) {
        button.classList.remove("disabled");
        button.disabled = false;

        // Add click handler to redirect to quiz page
        button.addEventListener('click', async () => {
          // Store the selected building in localStorage or URL
          console.log(key)
          localStorage.setItem('selectedBuilding', key);
          // Redirect to the quiz page
          console.log(key)
          const load = await loadComponent(`./components/academy/${key}.html`);

          if (load) {
            const dialogueText = document.getElementById('dialogue-text');
            // const upgradeText = document.getElementById('dialogue-text');
            const choiceBox = document.querySelector('.choice-box');

            import('./dialogueData.js').then(module => {
              const dialogueMap = module.dialogueMapData;
              dialogueEngine = new DialogueEngine(dialogueMap, dialogueText, choiceBox, building, section);
              dialogueEngine.start();
            });
          }
        });
      } else {
        button.classList.add("disabled");
        button.disabled = true;
      }
    }
  });
}

// Exported init function (matches your style)
export function init() {
  console.log("Initializing upgrade buttons");
  requestAnimationFrame(() => {
    initializeBuildingUpgrade();
    applyUpgradeStatus();
  });
}

// Exported update function to change upgrade status dynamically
export function setBuildingUpgrade(buildingKey, value) {
  const upgradeStatus = JSON.parse(localStorage.getItem("buildingUpgrade") || "{}");

  if (buildingKey in upgradeStatus) {
    upgradeStatus[buildingKey] = value;
    localStorage.setItem("buildingUpgrade", JSON.stringify(upgradeStatus));
    applyUpgradeStatus();
  } else {
    console.warn(`Invalid building key: ${buildingKey}`);
  }
}
