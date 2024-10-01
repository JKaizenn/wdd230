document
  .getElementById("darkModeToggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Toggle dark mode for header, nav, cards, and footer as well
    document.querySelector("header").classList.toggle("dark-mode");
    document.querySelector("nav").classList.toggle("dark-mode");
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.toggle("dark-mode");
    });
    document.querySelector("footer").classList.toggle("dark-mode");
  });
