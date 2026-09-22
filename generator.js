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
const generateButton = document.querySelector("#generate");
const copyButton = document.querySelector("#copy");

function renderName() {
  nameElement.textContent = generateName();
}

generateButton.addEventListener("click", renderName);

copyButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText(nameElement.textContent);
  const originalText = copyButton.textContent;
  copyButton.textContent = "Copied";
  setTimeout(() => {
    copyButton.textContent = originalText;
  }, 1000);
});

renderName();
