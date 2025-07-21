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
});

// 🧠 Extract village logic into reusable function
function loadVillage() {
  loadComponent('./components/village.html', 'game-container', attachBuildingListeners);
}

// 🔁 Called after village.html loads
function attachBuildingListeners() {
  const quizBuildings = document.querySelectorAll('.building[data-type="quiz"]');
  quizBuildings.forEach(building => {
    building.addEventListener('click', () => {
      const buildingId = building.id; // e.g., "compute", "data", etc.
      loadComponent(`./components/questions/${buildingId}.html`);

      // Dynamically import the module script (after DOM is updated)
      import('./dialogue.js').then(module => {
        if (module && typeof module.initDialogue === 'function') {
          module.initDialogue();
        }
      });
    });
  });

  const infoBuildings = document.querySelectorAll('.building[data-type="info"]');
  infoBuildings.forEach(building => {
    console.log(`Attaching click listener to info building: ${building.id}`);
    building.addEventListener('click', () => {
      const buildingId = building.id; // e.g., "compute", "data", etc.
      loadComponent(`./components/${buildingId}.html`);

      // Dynamically import the module script (after DOM is updated)
      import('./upgrade.js').then(module => {
        if (module && typeof module.initUpgradeButtons === 'function') {
          module.initUpgradeButtons();
        }
      });
    });
  });
}

// ⚙️ Load the data quiz scene
function loadData() {
  loadComponent('./components/questions/data.html');

  // Dynamically import the module script (after DOM is updated)
  import('./dialogue.js').then(module => {  
    if (module && typeof module.initDialogue === 'function') {
      module.initDialogue();
    }
  });
}

// ⚙️ Load the academy quiz scene
function loadAcademic() {
  loadComponent('./components/academic.html');

  // Dynamically import the module script (after DOM is updated)
  import('./upgrade.js').then(module => {  
    if (module && typeof module.initUpgradeButtons === 'function') {
      module.initUpgradeButtons();
    }
  });
}

// ⚙️ Load the academy quiz scene
function loadArena() {
  loadComponent('./components/arena.html');

  // Dynamically import the module script (after DOM is updated)
  import('./contest.js').then(module => {  
    if (module && typeof module.initContestButtons === 'function') {
      module.initContestButtons();
    }
  });
}

// Function to load external HTML into target container
export async function loadComponent(path, targetId = 'game-container') {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Failed to load ${path}`);

    const html = await response.text();
    document.getElementById(targetId).innerHTML = html;

    return true;
  } catch (error) {
    console.error(error);
    document.getElementById(targetId).innerHTML = `<p>Error loading content.</p>`;
    return false;
  }
}
