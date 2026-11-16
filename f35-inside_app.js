const zones = {
  cockpit: {
    number: "01",
    type: "FLIGHT DECK",
    icon: "◈",
    title: "Cockpit &<br />mission computer",
    description: "The F-35’s cockpit is built around a panoramic display and a mission computer that fuses data from the jet’s own sensors and external sources into one tactical picture.",
    tag: "CORE SYSTEM",
    facts: [["DISPLAY", "Panoramic touchscreen"], ["INPUT", "Helmet-mounted display"], ["ROLE", "Sense + decide"]],
  },
  engine: {
    number: "02",
    type: "PROPULSION",
    icon: "◌",
    title: "F135<br />engine",
    description: "A single Pratt & Whitney F135 afterburning turbofan provides the thrust for all three variants. The short-takeoff/vertical-landing F-35B adds a lift-fan system behind the cockpit.",
    tag: "POWERPLANT",
    facts: [["TYPE", "Afterburning turbofan"], ["LAYOUT", "Single engine"], ["F-35B", "Lift-fan variant"]],
  },
  weapons: {
    number: "03",
    type: "INTERNAL CARRIAGE",
    icon: "⌄",
    title: "Internal<br />weapons bays",
    description: "Internal bays allow the aircraft to carry selected weapons while preserving its low-observable profile. External stations can be used when stealth is less important than payload.",
    tag: "MISSION FLEXIBILITY",
    facts: [["LOCATION", "Fuselage centerline"], ["MODE", "Internal or external"], ["DESIGN", "Low-drag carriage"]],
  },
  sensors: {
    number: "04",
    type: "SENSOR SUITE",
    icon: "⌁",
    title: "Distributed<br />sensors",
    description: "Sensors distributed around the airframe give the pilot a wide field of view. Their inputs are combined rather than presented as isolated instruments.",
    tag: "AWARENESS",
    facts: [["RADAR", "AESA array"], ["OPTICS", "Electro-optical cameras"], ["NETWORK", "External data links"]],
  },
  fuel: {
    number: "05",
    type: "AIRFRAME SYSTEMS",
    icon: "≈",
    title: "Fuel & thermal<br />management",
    description: "Fuel tanks are integrated into the airframe, while thermal-management hardware handles heat from the engine, avionics, and other high-demand systems.",
    tag: "ENDURANCE",
    facts: [["FUEL", "Internal tankage"], ["TASK", "Heat distribution"], ["BENEFIT", "Range + reliability"]],
  },
  structure: {
    number: "06",
    type: "LOW OBSERVABLE DESIGN",
    icon: "△",
    title: "Shaping &<br />surface materials",
    description: "Faceted shaping, aligned edges, carefully managed apertures, and radar-absorbent materials work together to reduce radar return from key aspects.",
    tag: "SIGNATURE CONTROL",
    facts: [["FOCUS", "Radar signature"], ["DETAIL", "Aligned edges"], ["TRADE-OFF", "Maintenance intensive"]],
  },
};

const card = {
  number: document.querySelector("#component-number"),
  type: document.querySelector("#component-type"),
  icon: document.querySelector("#component-icon"),
  title: document.querySelector("#component-title"),
  description: document.querySelector("#component-description"),
  facts: document.querySelector("#fact-list"),
  tag: document.querySelector("#component-tag"),
};

function renderZone(key) {
  const zone = zones[key];
  if (!zone) return;
  card.number.textContent = zone.number;
  card.type.textContent = zone.type;
  card.icon.textContent = zone.icon;
  card.title.innerHTML = zone.title;
  card.description.textContent = zone.description;
  card.tag.textContent = zone.tag;
  card.facts.innerHTML = zone.facts.map(([label, value]) => `<div class="fact"><b>${label}</b><span> — ${value}</span></div>`).join("");
  document.querySelectorAll(".hotspot").forEach((button) => {
    button.classList.toggle("active", button.dataset.zone === key);
  });
}

document.querySelectorAll(".hotspot").forEach((button) => {
  button.addEventListener("click", () => renderZone(button.dataset.zone));
});