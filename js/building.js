import { loadComponent } from './main.js';
import { UpgradeEngine } from './upgradeEngine.js';

let upgradeEngine = null;
const buildingKey = 'aiCenter'; // Only AI Center
const buildingClass = 'ai';     // CSS class for AI Center button
const buildingLevel = 'level01';

// Initialize only AI Center upgrade state
function initializeAICenterUpgrade() {
  if (!localStorage.getItem("aiCenterUpgrade")) {
    const defaultUpgradeState = {
      upgraded: true,
      reviewedCourse: false,
      reviewedWrong: false
    };
    localStorage.setItem("aiCenterUpgrade", JSON.stringify(defaultUpgradeState));
  }
}

// Update button states based on localStorage
function applyAICenterStatus() {
  const aiCenterStatus = JSON.parse(localStorage.getItem("aiCenterUpgrade") || "{}");

  // --- Upgrade Button ---
  const upgradeBtn = document.querySelector(`.upgrade-button.${buildingClass}`);
  if (upgradeBtn) {
    if (aiCenterStatus.upgraded) {
      upgradeBtn.classList.remove("disabled");
      upgradeBtn.disabled = false;
      upgradeBtn.addEventListener('click', async () => {
        await handleUpgradeClick();
      });
    } else {
      upgradeBtn.classList.add("disabled");
      upgradeBtn.disabled = true;
    }
  }

  // --- Review Course Button ---
  const courseBtn = document.querySelector(`.review-course-button.${buildingClass}`);
  if (courseBtn) {
    if (aiCenterStatus.reviewedCourse) {
      courseBtn.classList.remove("disabled");
      courseBtn.disabled = false;
      courseBtn.addEventListener('click', async () => {
        await handleReviewCourseClick();
      });
    } else {
      courseBtn.classList.add("disabled");
      courseBtn.disabled = true;
    }
  }

  // --- Review Wrong Questions Button ---
  const wrongBtn = document.querySelector(`.review-wrong-button.${buildingClass}`);
  if (wrongBtn) {
    if (aiCenterStatus.reviewedWrong) {
      wrongBtn.classList.remove("disabled");
      wrongBtn.disabled = false;
      wrongBtn.addEventListener('click', async () => {
        await handleReviewWrongClick();
      });
    } else {
      wrongBtn.classList.add("disabled");
      wrongBtn.disabled = true;
    }
  }
}

// Handles upgrade button click
async function handleUpgradeClick() {
  localStorage.setItem('selectedBuilding', buildingKey);
  const load = await loadComponent(`./components/upgrade/${buildingKey}.html`);
  if (load) {
    const upgradeText = document.getElementById('dialogue-text');
    const choiceBox = document.querySelector('.choice-box');

    const module = await import('./upgradeData.js');
    const upgradeMap = module.upgradeMapData;

    upgradeEngine = new UpgradeEngine(upgradeMap, upgradeText, choiceBox, buildingKey, buildingLevel);
    upgradeEngine.start();
  }
}

// Handles reviewing course materials
async function handleReviewCourseClick() {
  localStorage.setItem("aiCenterLastAction", "reviewCourse");
  await loadComponent(`./components/building/${buildingKey}_course.html`);
}

// Handles reviewing wrong questions
async function handleReviewWrongClick() {
  localStorage.setItem("aiCenterLastAction", "reviewWrong");
  await loadComponent(`./components/building/${buildingKey}_wrong.html`);
}

// Exported init function
export function init() {
  console.log("Initializing AI Center buttons");
  requestAnimationFrame(() => {
    initializeAICenterUpgrade();
    applyAICenterStatus();
  });
}

// Update AI Center upgrade state
export function setAICenterStatus(key, value) {
  const aiCenterStatus = JSON.parse(localStorage.getItem("aiCenterUpgrade") || "{}");
  if (key in aiCenterStatus) {
    aiCenterStatus[key] = value;
    localStorage.setItem("aiCenterUpgrade", JSON.stringify(aiCenterStatus));
    applyAICenterStatus();
  } else {
    console.warn(`Invalid AI Center status key: ${key}`);
  }
}
