// =========================================================
// DECEMBER 2025 DINING CALENDAR (FESTIVE WITH ICONS)
// =========================================================
(function buildDiningCalendar() {
  const container = document.getElementById("dining-calendar");
  if (!container) return;

  const breakfastItems = ["Pancakes", "Egg Sandwich", "Omelette Bar", "Bagels", "French Toast", "Breakfast Burrito"];
  const lunchItems = ["Grilled Cheese", "Chicken Alfredo", "Veggie Wrap", "Tacos", "BBQ Chicken", "Pasta Primavera", "Soup & Salad"];
  const daysInMonth = 31; // December
  const festiveColors = ["#d32f2f", "#388e3c", "#fbc02d"]; // red, green, gold
  const festiveIcons = ["🎄", "🎅", "❄️", "🎁"]; // Christmas icons

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // =========================================================
  // CREATE WEEKDAY HEADER
  // =========================================================
  weekdays.forEach(day => {
    const cell = document.createElement("div");
    cell.className = "calendar-header";
    cell.textContent = day;
    container.appendChild(cell);
  });

  // =========================================================
  // CALCULATE START DAY (Dec 1, 2025 is Monday => index 1)
  // =========================================================
  const startDayIndex = 1; // 0 = Sun, 1 = Mon, etc.

  // Add empty placeholders for days before Dec 1
  for (let i = 0; i < startDayIndex; i++) {
    const placeholder = document.createElement("div");
    placeholder.className = "calendar-day";
    container.appendChild(placeholder);
  }

  // =========================================================
  // CREATE EACH DAY
  // =========================================================
  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");
    cell.className = "calendar-day";

    // Pick random festive color
    const bgColor = festiveColors[Math.floor(Math.random() * festiveColors.length)];
    cell.style.backgroundColor = bgColor;

    // Adjust text color for readability
    cell.style.color = (bgColor === "#fbc02d") ? "#000" : "#fff";

    // Pick a random festive icon for this day
    const icon = festiveIcons[Math.floor(Math.random() * festiveIcons.length)];

    const breakfast = breakfastItems[Math.floor(Math.random() * breakfastItems.length)];
    const lunch = lunchItems[Math.floor(Math.random() * lunchItems.length)];

    cell.innerHTML = `
      <h5>Dec ${day} ${icon}</h5>
      <p><strong>Breakfast:</strong> ${breakfast}</p>
      <p><strong>Lunch:</strong> ${lunch}</p>
    `;

    container.appendChild(cell);
  }
})();
