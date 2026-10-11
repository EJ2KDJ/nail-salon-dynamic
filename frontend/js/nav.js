
// Event listener for hamburger menu
document.addEventListener("DOMContentLoaded", function () { // Loads the DOM content before executing the code

    const hmbrg = document.getElementById("hamburger"); // Get the button element by its ID
    const navLinks = document.querySelector(".navLinks"); // Get the nav link container by its class
    hmbrg.addEventListener("click", function () { // event listener when clicking the hamburger button
        navLinks.classList.toggle("show"); // toggles the "show" class on the nav link container
    });

});