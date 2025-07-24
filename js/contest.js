import { loadComponent } from './main.js';
import { ContestEngine } from './contestEngine.js';

let contestEngine = null;

const contestEntryFees = {
  bronze: 5,
  silver: 10,
  gold: 15
};

const resourceMap = {
  ai: "rawData",
  data: "dataPacket",
  defense: "securityToken",
  compute: "processingUnit"
};

// Initialize resources
localStorage.setItem("contestAvailability", JSON.stringify({
      ai:    { bronze: false, silver: false, gold: false },
      data:  { bronze: false, silver: false, gold: false },
      defense: { bronze: false, silver: false, gold: false },
      compute: { bronze: false, silver: false, gold: false }
}));

// Initialize localStorage defaults if missing
function initializeBuildingContest() {
  if (!localStorage.getItem("contestAvailability")) {
    const defaultStatus = {
      ai:    { bronze: false, silver: false, gold: false },
      data:  { bronze: false, silver: false, gold: false },
      defense: { bronze: false, silver: false, gold: false },
      compute: { bronze: false, silver: false, gold: false }
    };
    localStorage.setItem("contestAvailability", JSON.stringify(defaultStatus));
  }
}

// Update buttons based on contest state
function applyContestStatus() {
  const contestAvailability = JSON.parse(localStorage.getItem("contestAvailability") || "{}");
  const userResources = JSON.parse(localStorage.getItem("resources") || "{}");

  Object.entries(contestAvailability).forEach(([contestKey, levels]) => {
    const resourceName = resourceMap[contestKey]; // e.g., 'rawData' for 'ai'
    const resourceAvailable = userResources[resourceName] || 0;
    const arenaCard = document.querySelector(`.arena-card.${contestKey}`);
    if (!arenaCard) return;

    const difficultyButtons = arenaCard.querySelectorAll(".contest-btn");
    difficultyButtons.forEach(button => {
      const difficulty = [...button.classList].find(cls => ['bronze', 'silver', 'gold'].includes(cls));
      const entryCost = contestEntryFees[difficulty];

      if (resourceAvailable >= entryCost) {
        button.classList.remove("disabled");
        button.disabled = false;

        button.addEventListener("click", () => {
          localStorage.setItem("selectedBuilding", contestKey); // contestKey is 'ai', 'data', etc.
          localStorage.setItem("selectedDifficulty", difficulty);

          console.log(`Starting contest for ${contestKey} at ${difficulty} level`);
          loadComponent(`./components/arena/${contestKey}.html`).then(success => {
            if (success) {
              const contestText = document.getElementById("question");
              const choiceBox = document.querySelector(".options");

              console.log(contestText, choiceBox, contestKey);
              import("./contestData.js").then(module => {
                const contestMap = module.contestMapData;
                contestEngine = new ContestEngine(contestMap, contestText, choiceBox, contestKey);
                contestEngine.start();
              });
            }
          });
        });

      } else {
        button.classList.add("disabled");
        button.disabled = true;
      }
    });
  });
}

// Exported init function (matches your style)
export function init() {
  requestAnimationFrame(() => {
    initializeBuildingContest();
    applyContestStatus();
  });
}

// Exported update function to change contest status dynamically
// setContestLevelAvailability('ai', 'bronze', true);
export function setContestLevelAvailability(contestKey, level, value) {
  const contestAvailability = JSON.parse(localStorage.getItem("contestAvailability") || "{}");

  if (contestAvailability[contestKey] && level in contestAvailability[contestKey]) {
    contestAvailability[contestKey][level] = value;
    localStorage.setItem("contestAvailability", JSON.stringify(contestAvailability));
    applyContestStatus();
  } else {
    console.warn(`Invalid contest or level: ${contestKey}.${level}`);
  }
}

