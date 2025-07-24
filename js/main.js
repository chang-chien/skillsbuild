import { refreshResourcesUI } from './resources.js';

document.addEventListener('DOMContentLoaded', () => {
  loadVillage(); // Load village by default

  refreshResourcesUI();

  const btnOverview = document.getElementById('btn-village');
  if (btnOverview) {
    btnOverview.addEventListener('click', loadVillage);
  }

  const btnDataQuiz = document.getElementById('btn-data-quiz');
  if (btnDataQuiz) {
    btnDataQuiz.addEventListener('click', loadData);
  }

  const btnAcademicQuiz = document.getElementById('btn-academic-quiz');
  if (btnAcademicQuiz) {
    btnAcademicQuiz.addEventListener('click', loadAcademic);
  }

  const btnArena = document.getElementById('btn-arena-quiz');
  if (btnArena) {
    btnArena.addEventListener('click', loadArena);
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

// 🧠 Extract village logic into reusable function
function loadVillage() {
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
      console.log(building);
      const buildingType = building.getAttribute("data-type"); // e.g., "upgrade", "contest", "info"
      // const buildingType = building.data-type; // e.g., "upgrade", "contest", "info"
      console.log(`Building clicked: ${building.id} (${buildingType})`);

      let load = null;
      if (buildingType === 'dialogue') {
        load = await loadComponent(`./components/questions/${buildingId}.html`);
      } else if (buildingType === 'contest' || buildingType === 'upgrade') {
        load = await loadComponent(`./components/${buildingId}.html`);
      }

        console.log(`Loaded dialogue for ${buildingId}:`, load);
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

// ⚙️ Load the data quiz scene
function loadData() {
  loadComponent('./components/questions/data.html');

  // Dynamically import the module script (after DOM is updated)
  import('./dialogue.js').then(module => {  
    if (module && typeof module.init === 'function') {
      module.init();
    }
  });
}

// ⚙️ Load the academy quiz scene
function loadAcademic() {
  loadComponent('./components/academic.html');

  // Dynamically import the module script (after DOM is updated)
  import('./upgrade.js').then(module => {  
    if (module && typeof module.init === 'function') {
      module.init();
    }
  });
}

// ⚙️ Load the academy quiz scene
function loadArena() {
  loadComponent('./components/arena.html');

  // Dynamically import the module script (after DOM is updated)
  import('./contest.js').then(module => {  
    if (module && typeof module.init === 'function') {
      module.init();
    }
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
