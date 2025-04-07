import { Intro } from "./Intro";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed.");
  
  const intro = new Intro();
  intro.startIntro();

  const themeToggle = document.getElementById("theme-toggle");
  themeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
});
