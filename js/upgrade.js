import { loadComponent } from './main.js';
import { UpgradeEngine } from './upgradeEngine.js';

let upgradeEngine = null;

const buildingKeyMap = {
  aiCenter: 'ai',
  dataCenter: 'data',
  defenceSystem: 'defense',
  computeNode: 'compute'
};

// Initialize resources
localStorage.setItem("buildingUpgrade", JSON.stringify({
    aiCenter: true,
    dataCenter: true,
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
    // TODO: change the building and level to datastorage
    const building = 'aiCenter';
    const level = 'level01';

    if (button) {
      if (isEnabled) {
        button.classList.remove("disabled");
        button.disabled = false;

        // Add click handler to redirect to quiz page
        button.addEventListener('click', async () => {
          // Store the selected building in localStorage or URL
          localStorage.setItem('selectedBuilding', key);
          // Redirect to the quiz page
          const load = await loadComponent(`./components/academic/${key}.html`);

          if (load) {
            const upgradeText = document.getElementById('dialogue-text');
            const choiceBox = document.querySelector('.choice-box');

            import('./upgradeData.js').then(module => {
              const upgradeMap = module.upgradeMapData;
              upgradeEngine = new UpgradeEngine(upgradeMap, upgradeText, choiceBox, building, level);
              upgradeEngine.start();
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
export function initUpgradeButtons() {
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
