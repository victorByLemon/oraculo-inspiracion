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

  } else if (currentInspiration.type === "tendencia") {
    const contentElement = document.createElement("p");
    contentElement.textContent = currentInspiration.content;
    inspirationContent.appendChild(contentElement);

    const sourceElement = document.createElement("span");
    sourceElement.classList.add("source");
    sourceElement.innerHTML = `Fuente: <a href="${currentInspiration.source}" target="_blank">${currentInspiration.sourceText}</a>`;
    inspirationContent.appendChild(sourceElement);

  } else if (currentInspiration.type === "revelacion") {
    const imageElement = document.createElement("img");
    imageElement.src = currentInspiration.content;
    imageElement.alt = currentInspiration.alt;
    inspirationContent.appendChild(imageElement);
  }
}

nextButton.addEventListener("click", displayInspiration);

// Mostrar la primera inspiración al cargar la página
displayInspiration();
