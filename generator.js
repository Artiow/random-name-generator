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
const copyButton = document.querySelector("#copy");

function renderName() {
  const name = generateName();
  nameElement.textContent = name;
  return name;
}

async function copyName(name) {
  try {
    await navigator.clipboard.writeText(name);
  } catch (error) {
    console.error("Failed to copy name to clipboard:", error);
  }
}

nameElement.addEventListener("click", async () => {
  await copyName(renderName());
});

copyButton.addEventListener("click", async () => {
  await copyName(nameElement.textContent);
});

renderName();
