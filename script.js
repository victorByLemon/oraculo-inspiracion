
document.getElementById("inspireBtn").addEventListener("click", () => {
  const content = inspirationData[Math.floor(Math.random() * inspirationData.length)];
  const contentDiv = document.getElementById("content");
  const tag = document.getElementById("tag");

  if (content.type === "inspiracion") {
    tag.textContent = "INSPIRACIÓN";
    contentDiv.innerHTML = `
      <p>${content.content}</p>
      <p class="author">${content.author}</p>
    `;
  } else if (content.type === "tendencia") {
    tag.textContent = "TENDENCIA";
    contentDiv.innerHTML = `
      <p>${content.content}</p>
      <a href="${content.source}" target="_blank">${content.sourceText}</a>
    `;
  } else if (content.type === "revelacion") {
    tag.textContent = "REVELACIÓN";
    contentDiv.innerHTML = `
      <img src="${content.content}" alt="${content.alt}" class="image">
    `;
  }
});
