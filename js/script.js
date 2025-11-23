// =========================================================
// HOMEPAGE GREETING
// =========================================================
(function setGreeting() {
  const greeting = document.getElementById("greeting");
  if (!greeting) return;

  const hours = new Date().getHours();
  greeting.textContent =
    hours < 12 ? "Good morning ☀️!" :
    hours < 18 ? "Good afternoon 🌞!" :
    "Good evening 🌙!";
})();


// =========================================================
// UTILITY: CREATE WEEKDAY HEADER ROW
// =========================================================
function createWeekdayHeader(parent, className = "calendar-header") {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  weekdays.forEach(day => {
    const cell = document.createElement("div");
    cell.className = className;
    cell.textContent = day;
    parent.appendChild(cell);
  });
}


// =========================================================
// GENERIC UTILITY: RANDOM ITEM FROM ARRAY
// =========================================================
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];


// =========================================================
// DINING CALENDAR
// =========================================================
(function buildDiningCalendar() {
  const container = document.getElementById("dining-calendar");
  if (!container) return;

  const breakfastItems = ["Pancakes", "Egg Sandwich", "Omelette Bar", "Bagels", "French Toast", "Breakfast Burrito"];
  const lunchItems = ["Grilled Cheese", "Chicken Alfredo", "Veggie Wrap", "Tacos", "BBQ Chicken", "Pasta Primavera", "Soup & Salad"];
  const daysInMonth = 30;

  createWeekdayHeader(container);

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");
    cell.className = "calendar-day";
    cell.innerHTML = `
      <h5>Nov ${day}</h5>
      <p><strong>Breakfast:</strong> ${randomItem(breakfastItems)}</p>
      <p><strong>Lunch:</strong> ${randomItem(lunchItems)}</p>
    `;
    container.appendChild(cell);
  }
})();


// =========================================================
// EVENTS CALENDAR
// =========================================================
(function buildEventsCalendar() {
  const container = document.getElementById("events-calendar");
  if (!container) return;

  const daysInMonth = 30;
  const eventTypes = [
    { type: "Academic", color: "#f4a261" },
    { type: "Athletics", color: "#8d6e63" },
    { type: "Community", color: "#f4d35e" }
  ];

  createWeekdayHeader(container);

  for (let day = 1; day <= daysInMonth; day++) {
    const event = randomItem(eventTypes);

    const cell = document.createElement("div");
    cell.className = "calendar-day text-center text-white";
    cell.style.backgroundColor = event.color;
    cell.innerHTML = `
      <h5>${day}</h5>
      <p>${event.type}</p>
    `;
    container.appendChild(cell);
  }
})();


// =========================================================
// WEATHER CALENDAR
// =========================================================
(function buildWeatherCalendar() {
  const container = document.getElementById("weather-box");
  if (!container) return;

  const daysInMonth = 30;
  const weatherTypes = [
    { type: "Sunny", icon: "☀️", color: "#f4a261" },
    { type: "Cloudy", icon: "☁️", color: "#8d6e63" },
    { type: "Rainy", icon: "🌧️", color: "#219ebc" },
    { type: "Snowy", icon: "❄️", color: "#e9c46a" }
  ];

  // Header
  createWeekdayHeader(container, "day day-header");

  // Grid container
  const grid = document.createElement("div");
  grid.className = "calendar weather-calendar";

  // Days
  for (let day = 1; day <= daysInMonth; day++) {
    const weather = randomItem(weatherTypes);
    const temp = Math.floor(Math.random() * 25) + 40;

    const cell = document.createElement("div");
    cell.className = "day";
    cell.style.backgroundColor = weather.color;
    cell.innerHTML = `
      <strong>Nov ${day}</strong>
      <div>${weather.icon} ${weather.type}</div>
      <div>${temp}°F</div>
    `;

    grid.appendChild(cell);
  }

  container.appendChild(grid);
})();
