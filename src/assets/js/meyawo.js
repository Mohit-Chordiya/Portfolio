document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar .nav-link");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;

                // Smooth scroll animation
                document.querySelector(hash).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

                // Update the URL hash after the scroll
                window.location.hash = hash;
            }
        });
    });
    const navToggle = document.getElementById("nav-toggle");
    const navList = document.querySelector("ul.nav");

    navToggle.addEventListener("click", function () {
        this.classList.toggle("is-active");
        navList.classList.toggle("show");
    });
});
