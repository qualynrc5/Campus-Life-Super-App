document.addEventListener("DOMContentLoaded", () => {
  const calendar = document.getElementById("weather-calendar");
  if (!calendar) return;

  const daysInMonth = 31;
  const startWeekday = 1; // Monday, Dec 1, 2025

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const weatherTypes = [
    { type: "Snow", icon: "❄️", tempRange: [20, 34] },
    { type: "Snow Showers", icon: "❄️", tempRange: [22, 35] },
    { type: "Rainy", icon: "🌧️", tempRange: [28, 40] },
    { type: "Cloudy", icon: "☁️", tempRange: [25, 38] },
    { type: "Sunny", icon: "☀️", tempRange: [28, 40] },
    { type: "Windy", icon: "💨", tempRange: [20, 33] }
  ];

  function randomWeather() {
    const w = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
    const temp = Math.floor(Math.random() * (w.tempRange[1] - w.tempRange[0] + 1) + w.tempRange[0]);
    return { type: w.type, icon: w.icon, temp };
  }

  const festiveClasses = ["red", "green", "gold"];

  // Weekday headers
  weekdays.forEach(day => {
    const header = document.createElement("div");
    header.className = "calendar-header text-center fw-bold";
    header.textContent = day;
    calendar.appendChild(header);
  });

  // Empty cells before Dec 1
  for (let i = 0; i < startWeekday; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.className = "calendar-day empty-day";
    calendar.appendChild(emptyCell);
  }

  // Fill days of December
  for (let day = 1; day <= daysInMonth; day++) {
    const w = randomWeather();
    const className = festiveClasses[Math.floor(Math.random() * festiveClasses.length)];

    const card = document.createElement("div");
    card.className = `calendar-day text-center p-2 rounded ${className}`;
    card.innerHTML = `
      <h5>Dec ${day} ${w.icon}</h5>
      <p>${w.type}</p>
      <p>${w.temp}°F</p>
    `;
    calendar.appendChild(card);
  }
});
