const fs = require("fs");

const categories = ["tiktok", "facebook", "voix-plus"];
const monetizationLink = "https://otieu.com/4/9347005";

function generateArticles() {
  const today = new Date().toISOString().split("T")[0];
  let html = `<html><head><title>ViralMondo</title></head><body><h1>Articles du ${today}</h1>`;

  for (const cat of categories) {
    html += `<h2>${cat.toUpperCase()}</h2>`;
    for (let i = 1; i <= 10; i++) {
      html += `
        <div style="margin-bottom: 20px;">
          <img src="https://picsum.photos/300/200?random=${Math.random()}" alt="Viral image"><br>
          <strong>Article ${i} - ${cat}</strong><br>
          <p>Description d’un contenu viral ${i} dans ${cat}</p>
          <a href="${monetizationLink}" target="_blank">Voir plus</a>
        </div>
      `;
    }
  }

  html += `</body></html>`;
  fs.writeFileSync("index.html", html);
}

generateArticles();
