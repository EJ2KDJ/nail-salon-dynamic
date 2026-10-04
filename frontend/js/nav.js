document.addEventListener("DOMContentLoaded", function () {
    const hmbrg = document.getElementById("hamburger");
    const navLinks = document.querySelector(".navLinks");
    hmbrg.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    
});