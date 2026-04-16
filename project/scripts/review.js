

const form = document.querySelector(".pf1");
const countDisplay = document.getElementById("count");

// Load existing count
let count = localStorage.getItem("reviewCount") || 0;
countDisplay.textContent = `Total Reviews Submitted: ${count}`;

// Handle form submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    count++;
    localStorage.setItem("reviewCount", count);

    countDisplay.textContent = `Total Reviews Submitted: ${count}`;

    form.reset();

    alert("Review submitted successfully ✅");
});

