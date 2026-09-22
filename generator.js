import { adjectives, surnames } from "./names.js";

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function generateName() {
  let name;

  do {
    name = `${randomItem(adjectives)}_${randomItem(surnames)}`;
  } while (name === "boring_wozniak");

  return name;
}

const nameElement = document.querySelector("#name");

function renderName() {
  const name = generateName();
  nameElement.textContent = name;
  return name;
}

nameElement.addEventListener("click", async () => {
  const name = renderName();

  try {
    await navigator.clipboard.writeText(name);
  } catch (error) {
    console.error("Failed to copy name to clipboard:", error);
  }
});

renderName();
