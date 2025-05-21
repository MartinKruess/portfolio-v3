const ageContainer = document.querySelector(".ageContainer");
const heute = new Date();
const bday = new Date(1990, 2, 1);
const rawAge = heute - bday;
const age = Math.floor(rawAge / 31536000000);
ageContainer.innerText = `${age}`;
