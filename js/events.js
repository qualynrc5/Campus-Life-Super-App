// events.js — December 2026 (starts Monday) with Christmas color key
document.addEventListener("DOMContentLoaded", () => {
  const calendar = document.getElementById("events-calendar");
  if (!calendar) return;

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const totalDays = 31;            // December has 31 days
  const startWeekday = 1;          // Dec 1, 2026 -> Monday (0=Sun,1=Mon,...)

  // Christmas color palette
  const eventTypes = [
    { type: "Holiday", color: "#b71c1c", icon: "🎄" },    // red (primary Christmas)
    { type: "Community", color: "#2e7d32", icon: "🤝" },  // green
    { type: "Academic", color: "#f4d35e", icon: "📚" },   // gold
    { type: "Athletics", color: "#6a1b9a", icon: "🏀" }   // deep berry for contrast
  ];

  // ----- December 2026 Events -----
  const events = [
    { day: 1, title: "Finals Study Kickoff", type: "Academic" },
    { day: 3, title: "Winter Crafts Night", type: "Community" },
    { day: 5, title: "Hot Cocoa Social", type: "Community" },
    { day: 7, title: "Campus Tree Lighting", type: "Holiday" },
    { day: 10, title: "Gingerbread House Contest", type: "Holiday" },
    { day: 12, title: "Christmas Movie Marathon", type: "Holiday" },
    { day: 14, title: "Final Exams Begin", type: "Academic" },
    { day: 15, title: "Ugly Sweater Day", type: "Holiday" },
    { day: 17, title: "Holiday Choir Concert", type: "Holiday" },
    { day: 18, title: "Residence Hall Party", type: "Holiday" },
    { day: 20, title: "Final Exams End", type: "Academic" },
    { day: 21, title: "Winter Break Begins", type: "Community" },
    { day: 24, title: "Christmas Eve — No Classes", type: "Holiday" },
    { day: 25, title: "Christmas Day — Campus Closed", type: "Holiday" },
    { day: 26, title: "Holiday Brunch", type: "Holiday" },
    { day: 31, title: "New Year's Eve Celebration", type: "Community" }
  ];

  // ----- Build legend / color key (insert before calendar) -----
  // If you have a container for the legend, you can append to it.
  // Otherwise create one just above the calendar element.
  const legendId = "events-legend";
  let legend = document.getElementById(legendId);
  if (!legend) {
    legend = document.createElement("div");
    legend.id = legendId;
    legend.style.display = "flex";
    legend.style.gap = "12px";
    legend.style.justifyContent = "center";
    legend.style.margin = "12px 0";
    calendar.parentNode.insertBefore(legend, calendar);
  } else {
    legend.innerHTML = "";
  }

  eventTypes.forEach(t => {
    const item = document.createElement("div");
    item.style.display = "flex";
    item.style.alignItems = "center";
    item.style.gap = "6px";
    item.style.fontWeight = "600";

    const swatch = document.createElement("span");
    swatch.style.width = "16px";
    swatch.style.height = "16px";
    swatch.style.display = "inline-block";
    swatch.style.borderRadius = "3px";
    swatch.style.backgroundColor = t.color;
    swatch.style.boxShadow = "0 0 0 1px rgba(0,0,0,0.08)";

    const label = document.createElement("span");
    label.innerText = `${t.icon} ${t.type}`;

    item.appendChild(swatch);
    item.appendChild(label);
    legend.appendChild(item);
  });

  // ----- Add weekday headers -----
  daysOfWeek.forEach(day => {
    const header = document.createElement("div");
    header.className = "calendar-header text-center fw-bold";
    header.innerText = day;
    calendar.appendChild(header);
  });

  // ----- Empty cells to align Dec 1 on the correct weekday -----
  for (let i = 0; i < startWeekday; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.className = "calendar-day empty-day";
    // style empty cells lightly to match calendar
    emptyCell.style.background = "transparent";
    emptyCell.style.boxShadow = "none";
    calendar.appendChild(emptyCell);
  }

  // ----- Create each day of December -----
  for (let day = 1; day <= totalDays; day++) {
    const eventForDay = events.find(e => e.day === day);

    // pick a default type randomly for non-event days (keeps calendar colorful)
    let chosenType = eventTypes[Math.floor(Math.random() * eventTypes.length)];

    if (eventForDay) {
      const typeMatch = eventTypes.find(t => t.type === eventForDay.type);
      if (typeMatch) chosenType = typeMatch;
    }

    const card = document.createElement("div");
    card.className = "calendar-day text-center p-2 rounded";
    card.style.backgroundColor = chosenType.color;
    card.style.color = chosenType.type === "Holiday" ? "white" : "black";

    if (eventForDay) {
      card.innerHTML = `
        <h5><strong>${day}</strong></h5>
        <p style="margin:0; font-weight:600">${chosenType.icon} ${eventForDay.title}</p>
      `;
      // make holiday/red events a bit more prominent
      if (chosenType.type === "Holiday") {
        card.style.border = "2px solid rgba(0,0,0,0.08)";
        card.style.boxShadow = "0 4px 10px rgba(183,28,28,0.12)";
      }
    } else {
      card.innerHTML = `<h5><strong>${day}</strong></h5><p style="margin:0">—</p>`;
    }

    calendar.appendChild(card);
  }
});
