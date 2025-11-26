const digitalEl = document.getElementById("digital");
const hourHand = document.getElementById("hour-hand");
const minHand = document.getElementById("min-hand");
const secHand = document.getElementById("sec-hand");
function updateDigital() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  digitalEl.textContent = `${h}:${m}:${s}`;
}
function updateAnalogClock() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const secDeg = s * 6;
  const minDeg = m * 6 + s * 0.1;
  const hourDeg = (h % 12) * 30 + m * 0.5;

  secHand.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
  minHand.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}
function updateClock() {
  updateDigital();
  updateAnalogClock();
}
setInterval(updateClock, 200);
updateClock();
window.addEventListener("load", function () {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5q ease";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});
