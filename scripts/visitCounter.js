document.addEventListener("DOMContentLoaded", function () {
  // Get the current visit count from localStorage
  let visitCount = localStorage.getItem("pageVisitCount");

  // Check if the visit count exists in localStorage
  if (visitCount === null) {
    visitCount = 1; // First visit
  } else {
    visitCount = parseInt(visitCount) + 1; // Increment the visit count
  }

  // Store the updated visit count back into localStorage
  localStorage.setItem("pageVisitCount", visitCount);

  // Display the visit count in the element with id 'visitCounter'
  const visitCounterElement = document.getElementById("visitCounter");
  if (visitCounterElement) {
    visitCounterElement.textContent = visitCount;
  } else {
    console.error("Element with id 'visitCounter' not found.");
  }
});
