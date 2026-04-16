const menuBtn = document.querySelector("#menu");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");

    menuBtn.innerHTML = nav.classList.contains("open")
        ? "✖"
        : "&#9776;";
});

// Footer: Current Year
const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent =
"Last Modification: " + document.lastModified;