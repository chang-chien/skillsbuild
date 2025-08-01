import { loadComponent } from './main.js';
import { loadVillage } from './main.js';
import { Storage } from './resources.js';
import { refreshResourcesUI } from './resources.js';

export function bindTutorialEvents() {

  const btn0 = document.querySelector('#tutorial00');
  if (btn0) {
    btn0.addEventListener('click', async () => {

      const input = document.getElementById("leaderNameInput");
      const name = input.value.trim();
      console.log("Entered name:", name);
      if (name) {
        Storage.set("player-name", name);

        document.getElementById("player-name").textContent = name;

        const loaded = await loadComponent('./components/tutorial/tutorial01.html', 'game-container');
        if (loaded) {
          // Wait for the content to load, then bind again
          bindTutorialEvents(); 
        }
      } else {
        alert("Elder Terry frowns: 'A leader must have a name...'");
      }
    });
  }

  // Bind tutorial01 → tutorial02
  const btn1back = document.getElementById('tutorial_01_back');
  if (btn1back) {
    btn1back.addEventListener('click', async () => {
      const loaded = await loadComponent('./components/tutorial/tutorial.html', 'game-container');
      if (loaded) {
        // Wait for the content to load, then bind again
        bindTutorialEvents(); 
      }
    });
  }

  const btn1next = document.getElementById('tutorial_01_next');
  if (btn1next) {
    btn1next.addEventListener('click', async () => {
      const loaded = await loadComponent('./components/tutorial/tutorial02.html', 'game-container');
      if (loaded) {
        // Wait for the content to load, then bind again
        bindTutorialEvents(); 
      }
    });
  }

  // Bind tutorial02 → tutorial03
  const btn2back = document.getElementById('tutorial_02_back');
  if (btn2back) {
    btn2back.addEventListener('click', async () => {
      const loaded = await loadComponent('./components/tutorial/tutorial01.html', 'game-container');
      if (loaded) {
        bindTutorialEvents();
      }
    });
  }

  const btn2next = document.getElementById('tutorial_02_next');
  if (btn2next) {
    btn2next.addEventListener('click', async () => {
      const loaded = await loadComponent('./components/tutorial/tutorial03.html', 'game-container');
      if (loaded) {
        bindTutorialEvents();
      }
    });
  }

  // Bind tutorial03 → village page
  const btn3back = document.getElementById('tutorial_03_back');
  if (btn3back) {
    btn3back.addEventListener('click', async () => {
      const loaded = await loadComponent('./components/tutorial/tutorial02.html', 'game-container');
      if (loaded) {
        bindTutorialEvents();
      }
    });
  }

  const btn3next = document.getElementById('tutorial_03_next');
  if (btn3next) {
    btn3next.addEventListener('click', async () => {
      const loaded = await loadComponent('./components/tutorial/tutorialEnd.html', 'game-container');
      if (loaded) {
        bindTutorialEvents();

        const resources = Storage.get("resources");
        console.log(resources);
        console.log(resources[electricity]);
        console.log(resources["electricity"]);
        if(resources["electricity"] == 0) {
          Storage.update("resources", { electricity: 10, rawData: 50 });
          refreshResourcesUI();
        }
      }
    });
  }

    // Bind tutorial03 → village page
  const btn4back = document.getElementById('tutorial_04_back');
  if (btn4back) {
    btn4back.addEventListener('click', async () => {
      const loaded = await loadComponent('./components/tutorial/tutorial03.html', 'game-container');
      if (loaded) {
        bindTutorialEvents();
      }
    });
  }

  const btn4next = document.getElementById('tutorial_04_next');
  if (btn4next) {
    btn4next.addEventListener('click', () => {
      loadVillage();
    });
  }
}

// function loadVillagePage() {
//   window.location.href = 'village.html';
// }
