// weather.js
document.addEventListener("DOMContentLoaded", () => {
  const calendar = document.getElementById("weather-calendar");
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const totalDays = 30; // November
  const weathers = ["Sunny", "Cloudy", "Rainy"];
  const temps = [40, 45, 50, 55, 60];

  // Create day headers
  daysOfWeek.forEach(day => {
    const header = document.createElement("div");
    header.className = "calendar-header text-center fw-bold";
    header.innerText = day;
    calendar.appendChild(header);
  });

  // Fill the rest of the calendar
  for (let day = 1; day <= totalDays; day++) {
    const weather = weathers[Math.floor(Math.random() * weathers.length)];
    const temp = temps[Math.floor(Math.random() * temps.length)];

    let color = "#f4d35e"; // Sunny
    if (weather === "Cloudy") color = "#8d6e63";
    else if (weather === "Rainy") color = "#219ebc";

    const card = document.createElement("div");
    card.className = "calendar-day text-center p-2 rounded";
    card.style.backgroundColor = color;
    card.innerHTML = `<h5>${day}</h5><p>${weather}</p><p>${temp}°F</p>`;
    calendar.appendChild(card);
  }
});
