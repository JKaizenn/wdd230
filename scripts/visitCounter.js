document.addEventListener("DOMContentLoaded", function () {
  // Get the current visit count from localStorage
  let visitCount = localStorage.getItem("pageVisitCount");

  // Check if the visit count exists and is a valid number
  if (visitCount === null || isNaN(parseInt(visitCount))) {
    visitCount = 1; // First visit or invalid stored value
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
