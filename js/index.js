import { skills } from "./skillsData.js";

// toggle the side bar
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// populate me skills
const servicesDiv = document.querySelector(".skills");

window.addEventListener("DOMContentLoaded", (e) => {
  for (let i = 0; i < skills.length; i++) {
    let skill = skills[i];
    let div = document.createElement("div");
    let itag = document.createElement("i");
    let h3 = document.createElement("h3");
    div.classList.add("skill");
    let skillDiv = servicesDiv.appendChild(div);
    let title = skillDiv.appendChild(h3);
    title.textContent = skill.skillName;
    let itagchild = skillDiv.appendChild(itag);
    itagchild.className = skill.devicon;
  }
});

// have logo click redirect you to main page

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  location.href = "index.html";
});
