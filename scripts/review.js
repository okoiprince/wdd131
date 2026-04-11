let count = localStorage.getItem("reviewCount") || 0;

count++;

localStorage.setItem("reviewCount", count);

document.getElementById("count").textContent =
  `Total Reviews Submitted: ${count}`;