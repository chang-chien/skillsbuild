// Initialize resources
localStorage.setItem("resources", JSON.stringify({
  rawData: 10,
  dataPacket: 0,
  securityToken: 0,
  processingUnit: 0,
  electricity: 50
}));

export function refreshResourcesUI() {
  const resources = JSON.parse(localStorage.getItem("resources")) || {
    rawData: 0,
    dataPacket: 0,
    securityToken: 0,
    processingUnit: 0,
    electricity: 0
  };

  document.getElementById("raw-data-count").textContent = resources.rawData;
  document.getElementById("data-packet-count").textContent = resources.dataPacket;
  document.getElementById("security-token-count").textContent = resources.securityToken;
  document.getElementById("processing-unit-count").textContent = resources.processingUnit;
  document.getElementById("electricity-count").textContent = resources.electricity;
}
