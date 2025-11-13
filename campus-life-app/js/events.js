document.addEventListener("DOMContentLoaded", () => {
  const calendar = document.getElementById("events-calendar");
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const totalDays = 30;

  // Event types with colors
  const eventTypes = [
    { type: "Academic", color: "#f4a261", icon: "📚" },
    { type: "Athletics", color: "#8d6e63", icon: "🏀" },
    { type: "Community", color: "#f4d35e", icon: "🤝" }
  ];

  // Actual events for specific dates
  const events = [
    { day: 2, title: "Homecoming Dance", type: "Community" },
    { day: 5, title: "Study Jam Night", type: "Academic" },
    { day: 10, title: "Career Fair", type: "Academic" },
    { day: 15, title: "Movie Under the Stars", type: "Community" },
    { day: 21, title: "Thanksgiving Dinner", type: "Community" },
    { day: 25, title: "Basketball Game", type: "Athletics" },
    { day: 28, title: "Open Mic Night", type: "Community" }
  ];

  // Weekday headers
  daysOfWeek.forEach(day => {
    const header = document.createElement("div");
    header.className = "calendar-header text-center fw-bold";
    header.innerText = day;
    calendar.appendChild(header);
  });

  // Fill the calendar
  for (let day = 1; day <= totalDays; day++) {
    // Check if this day has an event
    const eventForDay = events.find(e => e.day === day);

    // Pick a color type (based on event or random)
    let randomType = eventTypes[Math.floor(Math.random() * eventTypes.length)];
    if (eventForDay) {
      randomType = eventTypes.find(t => t.type === eventForDay.type);
    }

    // Create day cell
    const card = document.createElement("div");
    card.className = "calendar-day text-center p-2 rounded";
    card.style.backgroundColor = randomType.color;

    // Show event if it exists
    if (eventForDay) {
      card.innerHTML = `
        <h5><strong>${day}</strong></h5>
        <p>${randomType.icon} ${eventForDay.title}</p>
      `;
    } else {
      card.innerHTML = `<h5><strong>${day}</strong></h5><p>—</p>`;
    }

    calendar.appendChild(card);
  }
});

// =============================
