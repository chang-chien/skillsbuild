document.addEventListener('DOMContentLoaded', () => {
  loadVillage(); // Load village by default

  const btnOverview = document.getElementById('btn-village');
  if (btnOverview) {
    btnOverview.addEventListener('click', loadVillage);
  }

  const btnDataQuiz = document.getElementById('btn-data-quiz');
  if (btnDataQuiz) {
    btnDataQuiz.addEventListener('click', loadData);
  }
});

// 🧠 Extract village logic into reusable function
function loadVillage() {
  loadComponent('./components/village.html', 'game-container', attachBuildingListeners);
}

// 🔁 Called after village.html loads
function attachBuildingListeners() {
  const buildings = document.querySelectorAll('.building[data-type="quiz"]');
  buildings.forEach(building => {
    building.addEventListener('click', () => {
      const buildingId = building.id; // e.g., "compute", "data", etc.
      loadComponent(`./components/questions/${buildingId}.html`);

      // Dynamically import the module script (after DOM is updated)
      import('./dialog.js').then(module => {
        if (module && typeof module.initDialogue === 'function') {
          module.initDialogue();
        }
      });
    });
  });
}

// ⚙️ Load the data quiz scene
function loadData() {
  loadComponent('./components/questions/data.html');

  // Dynamically import the module script (after DOM is updated)
  import('./dialog.js').then(module => {  
    if (module && typeof module.initDialogue === 'function') {
      module.initDialogue();
    }
  });
}
// Function to load external HTML into target container
function loadComponent(path, targetId = 'game-container', callback = null) {
  fetch(path)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${path}`);
      return response.text();
    })
    .then(html => {
      document.getElementById(targetId).innerHTML = html;
      if (typeof callback === 'function') callback(); // ✅ Execute callback after load
    })
    .catch(error => {
      console.error(error);
      document.getElementById(targetId).innerHTML = `<p>Error loading content.</p>`;
    });
}
