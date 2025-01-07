const inspirationContent = document.getElementById("inspiration-content");
const nextButton = document.getElementById("next-button");
const inspirationLabel = document.getElementById("inspiration-label");

function displayInspiration() {
  // Generar un índice aleatorio
  const randomIndex = Math.floor(Math.random() * inspirationData.length);
  const currentInspiration = inspirationData[randomIndex];

  inspirationContent.innerHTML = ""; // Limpiar contenido anterior

  // Mostrar la etiqueta según el tipo de contenido
  if (currentInspiration.type === "inspiracion") {
    inspirationLabel.textContent = "Inspiración";
  } else if (currentInspiration.type === "tendencia") {
    inspirationLabel.textContent = "Tendencia";
  } else if (currentInspiration.type === "revelacion") {
    inspirationLabel.textContent = "Revelación";
  }

  if (currentInspiration.type === "inspiracion") {
    const phraseElement = document.createElement("p");
    phraseElement.textContent = currentInspiration.content;
    inspirationContent.appendChild(phraseElement);

    const authorElement = document.createElement("span");
    authorElement.textContent = currentInspiration.author;
    authorElement.classList.add("author");
    inspirationContent.appendChild(authorElement);
