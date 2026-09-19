const toggle = document.querySelector(".toggle");
const body = document.body;

const darkModeEnabled = localStorage.getItem("darkmode") === "enabled";

body.classList.toggle("darkmode", darkModeEnabled);
toggle.checked = darkModeEnabled;

toggle.addEventListener("change", () => {
  const enabled = toggle.checked;

  body.classList.toggle("darkmode", enabled);
  localStorage.setItem("darkmode", enabled ? "enabled" : "disabled");
});