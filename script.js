const inspirationContent = document.getElementById("inspiration-content");
const nextButton = document.getElementById("next-button");
let currentInspirationIndex = 0;

function displayInspiration() {
    const currentInspiration = inspirationData[currentInspirationIndex];
    inspirationContent.innerHTML = ""; // Limpiar contenido anterior

    if (currentInspiration.type === "phrase") {
        const phraseElement = document.createElement("p");
        phraseElement.textContent = currentInspiration.content;
        inspirationContent.appendChild(phraseElement);

        const authorElement = document.createElement("span");
        authorElement.textContent = currentInspiration.author;
        authorElement.classList.add("author");
        inspirationContent.appendChild(authorElement);

    } else if (currentInspiration.type === "image") {
        const imageElement = document.createElement("img");
        imageElement.src = currentInspiration.content;
        imageElement.alt = currentInspiration.alt;
        inspirationContent.appendChild(imageElement);
    } else if (currentInspiration.type === "story") {
        const storyElement = document.createElement("p");
        storyElement.textContent = currentInspiration.content;
        inspirationContent.appendChild(storyElement);
    }

    currentInspirationIndex = (currentInspirationIndex + 1) % inspirationData.length;
}

nextButton.addEventListener("click", displayInspiration);

// Mostrar la primera inspiración al cargar la página
displayInspiration();
