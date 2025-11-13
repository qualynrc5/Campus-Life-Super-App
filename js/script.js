// =============================
// HOMEPAGE GREETING
// =============================
const greeting = document.getElementById("greeting");
if (greeting) {
  const hours = new Date().getHours();
  if (hours < 12) greeting.textContent = "Good morning ☀️!";
  else if (hours < 18) greeting.textContent = "Good afternoon 🌞!";
  else greeting.textContent = "Good evening 🌙!";
}

// =============================
// SHARED FUNCTION: CREATE CALENDAR HEADER
// =============================
function createWeekdayHeader() {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const headerRow = document.createElement("div");
  headerRow.className = "calendar";
  weekdays.forEach(day => {
    const cell = document.createElement("div");
    cell.className = "day day-header";
    cell.textContent = day;
    headerRow.appendChild(cell);
  });
  return headerRow;
}

// =============================
// DINING CALENDAR
// =============================
const diningCalendar = document.getElementById("dining-calendar");
if (diningCalendar) {
  const breakfastItems = ["Pancakes", "Egg Sandwich", "Omelette Bar", "Bagels", "French Toast", "Breakfast Burrito"];
  const lunchItems = ["Grilled Cheese", "Chicken Alfredo", "Veggie Wrap", "Tacos", "BBQ Chicken", "Pasta Primavera", "Soup & Salad"];
  const daysInMonth = 30;
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Weekday Headers
  weekdays.forEach(day => {
    const header = document.createElement("div");
    header.className = "calendar-header";
    header.textContent = day;
    diningCalendar.appendChild(header);
  });

  // Calendar Days
  for (let day = 1; day <= daysInMonth; day++) {
    const breakfast = breakfastItems[Math.floor(Math.random() * breakfastItems.length)];
    const lunch = lunchItems[Math.floor(Math.random() * lunchItems.length)];

    const cell = document.createElement("div");
    cell.className = "calendar-day";
    cell.innerHTML = `
      <h5>Nov ${day}</h5>
      <p><strong>Breakfast:</strong> ${breakfast}</p>
      <p><strong>Lunch:</strong> ${lunch}</p>
    `;
    diningCalendar.appendChild(cell);
  }
}

// =============================
// EVENTS CALENDAR
// =============================
const eventsCalendar = document.getElementById("events-calendar");
if (eventsCalendar) {
  const totalDays = 30;
  const weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const eventTypes = [
    { type: "Academic", color: "#f4a261" },
    { type: "Athletics", color: "#8d6e63" },
    { type: "Community", color: "#f4d35e" }
  ];

  weekdays.forEach(day => {
    const header = document.createElement("div");
    header.className = "calendar-header";
    header.textContent = day;
    eventsCalendar.appendChild(header);
  });

  for (let day = 1; day <= totalDays; day++) {
    const event = eventTypes[Math.floor(Math.random() * eventTypes.length)];
    const cell = document.createElement("div");
    cell.className = "calendar-day text-center text-white";
    cell.style.backgroundColor = event.color;
    cell.innerHTML = `<h5>${day}</h5><p>${event.type}</p>`;
    eventsCalendar.appendChild(cell);
  }
}


// =============================
// WEATHER CALENDAR (MATCHES OTHERS NOW)
// =============================
const weatherBox = document.getElementById("weather-box");
if (weatherBox) {
  const daysInMonth = 30;
  const weatherTypes = [
    { type: "Sunny", icon: "☀️", color: "#f4a261" },
    { type: "Cloudy", icon: "☁️", color: "#8d6e63" },
    { type: "Rainy", icon: "🌧️", color: "#219ebc" },
    { type: "Snowy", icon: "❄️", color: "#e9c46a" }
  ];

  weatherBox.appendChild(createWeekdayHeader());

  const calendarGrid = document.createElement("div");
  calendarGrid.className = "calendar weather-calendar";

  for (let day = 1; day <= daysInMonth; day++) {
    const weather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
    const temp = Math.floor(Math.random() * 25) + 40;
    const cell = document.createElement("div");
    cell.className = "day";
    cell.style.backgroundColor = weather.color;
    cell.innerHTML = `
      <div><strong>Nov ${day}</strong></div>
      <div>${weather.icon} ${weather.type}</div>
      <div>${temp}°F</div>
    `;
    calendarGrid.appendChild(cell);
  }

  weatherBox.appendChild(calendarGrid);
}

// =============================
