const digitalEl = document.getElementById("digital");
function updateDigital() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  digitalEl.textContent = `${h}:${m}:${s}`;
}

setInterval(updateDigital, 200);
updateDigital();
