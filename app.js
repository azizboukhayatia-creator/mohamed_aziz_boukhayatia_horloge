const worldCities = [
  { name: "Paris", tz: "Europe/Paris", country: "France" },
  { name: "New York", tz: "America/New_York", country: "USA" },
  { name: "Tokyo", tz: "Asia/Tokyo", country: "Japon" },
  { name: "Sydney", tz: "Australia/Sydney", country: "Australie" },
  { name: "Londres", tz: "Europe/London", country: "Royaume-Uni" },
  { name: "Moscou", tz: "Europe/Moscow", country: "Russie" },
  { name: "Pékin", tz: "Asia/Shanghai", country: "Chine" },
  { name: "Rio de Janeiro", tz: "America/Sao_Paulo", country: "Brésil" },
  { name: "Le Caire", tz: "Africa/Cairo", country: "Égypte" },
  { name: "Mumbai", tz: "Asia/Kolkata", country: "Inde" },
  { name: "Los Angeles", tz: "America/Los_Angeles", country: "USA" },
  { name: "Dubai", tz: "Asia/Dubai", country: "Émirats Arabes Unis" },
  { name: "Berlin", tz: "Europe/Berlin", country: "Allemagne" },
  { name: "Toronto", tz: "America/Toronto", country: "Canada" },
  { name: "São Paulo", tz: "America/Sao_Paulo", country: "Brésil" },
  { name: "Singapour", tz: "Asia/Singapore", country: "Singapour" },
];
const digitalEl = document.getElementById("digital");
const hourHand = document.getElementById("hour-hand");
const minHand = document.getElementById("min-hand");
const secHand = document.getElementById("sec-hand");
const tzNameEl = document.getElementById("tz-name");
const tzSelect = document.getElementById("tz");
const offsetInput = document.getElementById("offset");
const citiesTableBody = document.getElementById("cities-table-body");

let selectedTZ = "local";
let customOffset = null;

function getCityTime(city) {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("fr-FR", {
      timeZone: city.tz,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    });

    return formatter.format(now);
  } catch (error) {
    return "--:--:--";
  }
}

function updateCitiesTable() {
  if (citiesTableBody) {
    citiesTableBody.innerHTML = "";
    worldCities.forEach((city) => {
      const cityTime = getCityTime(city);
      const row = document.createElement("tr");
      row.innerHTML = `
     <td>
          <div class="city-name">${city.name}</div>
      </td>
      <td>
          <div class="city-country">${city.country}</div>
      </td>
      <td>
          <div class="city-time">${cityTime}</div>
      </td>
    `;
      row.addEventListener("click", () => {
        selectedTZ = city.tz;
        customOffset = null;
        tzSelect.value = city.tz;
        offsetInput.value = "";
        updateTimezoneInfo();
        updateClock();
      });

      citiesTableBody.appendChild(row);
    });
  }
}
function getCurrentTime() {
  if (customOffset !== null) {
    const now = new Date();
    return new Date(now.getTime() + customOffset * 60000);
  }

  if (selectedTZ === "local") {
    return new Date();
  }
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("fr-FR", {
      timeZone: selectedTZ,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    });
    const parts = formatter.formatToParts(now);
    const partValues = {};
    parts.forEach((part) => {
      if (part.type !== "literal") {
        partValues[part.type] = part.value;
      }
    });
    return new Date(
      parseInt(partValues.year),
      parseInt(partValues.month) - 1,
      parseInt(partValues.day),
      parseInt(partValues.hour),
      parseInt(partValues.minute),
      parseInt(partValues.second)
    );
  } catch (error) {
    console.error("Erreur fuseau horaire:", error);
    return new Date();
  }
}
function updateDigital() {
  const now = getCurrentTime();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  digitalEl.textContent = `${h}:${m}:${s}`;
}
function updateAnalogClock() {
  const now = getCurrentTime();
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

function updateTimezoneInfo() {
  if (customOffset !== null) {
    const sign = customOffset >= 0 ? "+" : "";
    tzNameEl.textContent = `Décalage manuel : ${sign}${customOffset} min`;
  } else {
    tzNameEl.textContent = selectedTZ === "local" ? "Heure locale" : selectedTZ;
  }
}
document.getElementById("btn-tz").onclick = () => {
  const offsetValue = offsetInput.value.trim();

  if (offsetValue !== "") {
    customOffset = Number(offsetValue);
    selectedTZ = "custom";
    tzSelect.value = "local";
  } else {
    customOffset = null;
    selectedTZ = tzSelect.value;
  }

  updateTimezoneInfo();
  updateClock();
};

tzSelect.addEventListener("change", () => {
  if (tzSelect.value !== "custom") {
    customOffset = null;
    selectedTZ = tzSelect.value;
    offsetInput.value = "";
    updateTimezoneInfo();
    updateClock();
  }
});
offsetInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.getElementById("btn-tz").click();
  }
});

window.addEventListener("load", function () {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);

  updateClock();
  updateTimezoneInfo();
  updateCitiesTable();
  setInterval(updateCitiesTable, 1000);
});
setInterval(updateClock, 200);
updateClock();
updateTimezoneInfo();
