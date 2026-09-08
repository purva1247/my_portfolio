// ===============================
// Portfolio JavaScript
// ===============================

document.addEventListener("DOMContentLoaded", function() {

    console.log("Purva's Portfolio Loaded Successfully!");

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function(link) {

        link.addEventListener("click", function(event) {

            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {

                event.preventDefault();

                const target = document.querySelector(targetId);

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });

});