// Select elements
const menuButton = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");

// Toggle hamburger list (show/hide menu)
menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuButton.textContent = "❌";
    } else {
        menuButton.innerHTML = "&#9776;";
    }
});

// Footer: Current Year
const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent =
"Last Modification: " + document.lastModified;