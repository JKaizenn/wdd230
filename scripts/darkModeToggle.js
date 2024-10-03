const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const hamburger = document.getElementById("hamburger");

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  darkModeToggle.classList.toggle("dark-mode");
  hamburger.classList.toggle("dark-mode"); // Toggle dark mode for hamburger button

  document.querySelector("header").classList.toggle("dark-mode");
  document.querySelector(".topnav").classList.toggle("dark-mode");
  document
    .querySelectorAll(".card")
    .forEach((card) => card.classList.toggle("dark-mode"));
  document.querySelector("footer").classList.toggle("dark-mode");

  // Update button text based on mode
  if (body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "Light Mode";
  } else {
    darkModeToggle.textContent = "Dark Mode";
  }
});
