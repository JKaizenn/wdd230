let visitCount = localStorage.getItem("pageVisitCount");

if (visitCount === null) {
  visitCount = 1;
} else {
  visitCount = parseInt(visitCount) + 1;
}

localStorage.setItem("pageVisitCount", visitCount);

document.getElementById("visitCounter").textContent = visitCount;
