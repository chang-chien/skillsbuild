import { bindTutorialEvents } from './tutorial.js';
import { refreshResourcesUI } from './resources.js';

document.addEventListener('DOMContentLoaded', () => {
  loadTutorial(); // Load tutorial by default
  // loadVillage(); // Load village by default

  refreshResourcesUI();

  const btnOverview = document.getElementById('btn-village');
  if (btnOverview) {
    btnOverview.addEventListener('click', loadVillage);
  }

  const btnQuests = document.getElementById('btn-quests');
  if (btnQuests) {
    btnQuests.addEventListener('click', async () => {
      loadComponent('./components/quest.html', 'game-container');
    });
  }

  const btnNews = document.getElementById('btn-news');
  if (btnNews) {
    btnNews.addEventListener('click', loadNews);
  }

  const btnInsight = document.getElementById('btn-insight');
  if (btnInsight) {
    btnInsight.addEventListener('click', loadInsight);
  }

  const btnLeaderboard = document.getElementById('btn-leaderboard');
  if (btnLeaderboard) { 
    btnLeaderboard.addEventListener('click', async () => {
      loadComponent('./components/leaderboard.html', 'game-container');
    });
  }
});

async function loadTutorial() {
      let load = null;
  load = await loadComponent('./components/tutorial/tutorial.html', 'game-container');

  if (load) {
    // Dynamically import the module script (after DOM is updated)
    bindTutorialEvents();
    // .then(module => {
    //   if (module && typeof module.init === 'function') {
    //     module.init();
    //   }
    // });        
  }
}

// 🧠 Extract village logic into reusable function
export function loadVillage() {
  loadComponent('./components/village.html', 'game-container', attachBuildingListeners);
}

function loadNews() {
  loadComponent('./components/news.html', 'game-container');
}

function loadInsight() {
  loadComponent('./components/insight.html', 'game-container');
}


// 🔁 Called after village.html loads
function attachBuildingListeners() {
  const buildings = document.querySelectorAll('.building');
  buildings.forEach(building => {
    building.addEventListener('click', async () => {

      const buildingId = building.id; // e.g., "compute", "data", etc.
      const buildingType = building.getAttribute("data-type"); // e.g., "upgrade", "contest", "info"

      let load = null;
      if (buildingType === 'dialogue') {
        load = await loadComponent(`./components/${buildingId}.html`);
      } else if (buildingType === 'building') {
        load = await loadComponent(`./components/${buildingType}/${buildingId}.html`);
      } else if (buildingType === 'contest' || buildingType === 'upgrade') {
        load = await loadComponent(`./components/${buildingId}.html`);
      }

      if (load) {
        // Dynamically import the module script (after DOM is updated)
        import(`./${buildingType}.js`).then(module => {
          if (module && typeof module.init === 'function') {
            module.init();
          }
        });        
      }
    });
  });
}

// Function to load external HTML into target container
export async function loadComponent(path, targetId = 'game-container', callback = null) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Failed to load ${path}`);

    const html = await response.text();
    document.getElementById(targetId).innerHTML = html;
    if (typeof callback === 'function') callback();

    return true;
  } catch (error) {
    console.error(error);
    document.getElementById(targetId).innerHTML = `<p>Error loading content.</p>`;
    return false;
  }
}
