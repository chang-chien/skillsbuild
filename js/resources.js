export const Storage = {
  // Create or Replace an entire object
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  // Read from localStorage
  get(key) {
    const data = localStorage.getItem(key);
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  },

  // Update specific fields inside an object
  update(key, updates) {
    const existing = Storage.get(key) || {};
    const updated = { ...existing, ...updates };
    Storage.set(key, updated);
  },

  // Delete a key
  remove(key) {
    localStorage.removeItem(key);
  },

  // Clear all game-related keys (optional utility)
  clearAll() {
    const keysToClear = [
      "player-name",
      "village-level",
      "resource",
      "buildingUpgrade",
      "aiCenterUpgrade"
    ];
    keysToClear.forEach(key => localStorage.removeItem(key));
  }
};

// Example usage
// import { Storage } from './resources.js';

// CREATE or SET
Storage.set("player-name", "Player");
Storage.set("village-level", 1);
Storage.set("resources", {
  rawData: 10,
  dataPacket: 0,
  securityToken: 0,
  processingUnit: 0,
  electricity: 0
});
Storage.set("buildingUpgrade", {
  aiCenter: true,
  dataCenter: false,
  defenceSystem: false,
  computeNode: false
});
Storage.set("aiCenterUpgrade", {
  upgraded: true,
  reviewedCourse: false,
  reviewedWrong: false
});

// READ
// const player = Storage.get("player-name");
// const resources = Storage.get("resources");

// UPDATE nested
// Storage.update("resources", { electricity: 45, rawData: 15 });
// Storage.update("buildingUpgrade", { aiCenter: true });

// DELETE
// Storage.remove("aiCenterUpgrade");

// import { refreshResourcesUI } from './resources.js';
export function refreshResourcesUI() {
  const resources = Storage.get("resources");
  
  document.getElementById("raw-data-count").textContent = resources.rawData;
  document.getElementById("data-packet-count").textContent = resources.dataPacket;
  document.getElementById("security-token-count").textContent = resources.securityToken;
  document.getElementById("processing-unit-count").textContent = resources.processingUnit;
  document.getElementById("electricity-count").textContent = resources.electricity;
}

// import { playClickSound } from './resources.js';
const clickSound = new Audio('./assets/audio/click.m4a');
clickSound.volume = 1; // 50% volume

export function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}