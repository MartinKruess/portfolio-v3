import {
  basic,
  adds,
  frontend,
  backend,
  db,
  bonus,
  tools,
} from "./scripts/skillData.js";

const ageContainer = document.querySelector(".ageContainer");
const heute = new Date();
const bday = new Date(1990, 2, 1);
const rawAge = heute - bday;
const age = Math.floor(rawAge / 31536000000);
ageContainer.innerText = `${age}`;

const basicArticle = document.querySelector(".basicArticle");
const addsArticle = document.querySelector(".addsArticle");
const frontendArticle = document.querySelector(".frontendArticle");
const backendArticle = document.querySelector(".backendArticle");
const dbArticle = document.querySelector(".dbArticle");
const bonusArticle = document.querySelector(".bonusArticle");
const toolArticle = document.querySelector(".toolArticle");

function renderTechList(techList, container) {
  techList.forEach((tech) => {
    const img = document.createElement("img");
    img.src = tech.image;
    img.alt = tech.alt;
    container.appendChild(img);
  });
}

renderTechList(basic, basicArticle);
renderTechList(adds, addsArticle);
renderTechList(frontend, frontendArticle);
renderTechList(backend, backendArticle);
renderTechList(db, dbArticle);
renderTechList(bonus, bonusArticle);
renderTechList(tools, toolArticle);

// basic.forEach((tech) => {
//   basicArticle.insertAdjacentHTML("beforeend", `<img src="${tech.image}" alt="${tech.alt}" />`);alt} />`)
// });
// adds.forEach((tech) => {});
// frontend.forEach((tech) => {});
// backend.forEach((tech) => {});
// db.forEach((tech) => {});
// bonus.forEach((tech) => {});
// tools.forEach((tech) => {});
