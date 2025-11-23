// weather.js
document.addEventListener("DOMContentLoaded", () => {
  const calendar = document.getElementById("weather-calendar");
  if (!calendar) return;

  // =============== CONFIGURATION ===============
  const daysInMonth = 30;
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const weatherTypes = [
    { type: "Sunny", color: "#f4d35e" },
    { type: "Cloudy", color: "#8d6e63" },
    { type: "Rainy", color: "#219ebc" }
  ];

  const temperatures = [40, 45, 50, 55, 60];

  // =============== HELPERS ===============
  const rand = arr => arr[Math.floor(Math.random() * arr.length)];

  function addWeekdayHeaders() {
    weekdays.forEach(day => {
      const header = document.createElement("div");
      header.className = "calendar-header text-center fw-bold";
      header.textContent = day;
      calendar.appendChild(header);
    });
  }

  function buildWeatherDay(dayNum) {
    const weather = rand(weatherTypes);
    const temp = rand(temperatures);

    const card = document.createElement("div");
    card.className = "calendar-day text-center p-2 rounded text-white";
    card.style.backgroundColor = weather.color;

    card.innerHTML = `
      <h5>${dayNum}</h5>
      <p>${weather.type}</p>
      <p>${temp}°F</p>
    `;

    return card;
  }

  // =============== BUILD THE CALENDAR ===============
  addWeekdayHeaders();

  for (let day = 1; day <= daysInMonth; day++) {
    calendar.appendChild(buildWeatherDay(day));
  }
});
