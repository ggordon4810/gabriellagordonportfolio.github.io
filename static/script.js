document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const navigationLinks = document.getElementById("nav-links");
    const currentYear = document.getElementById("current-year");

    // Automatically update the copyright year.
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Open and close the mobile navigation menu.
    if (menuButton && navigationLinks) {
        menuButton.addEventListener("click", function () {
            navigationLinks.classList.toggle("open");

            const menuIsOpen = navigationLinks.classList.contains("open");

            menuButton.setAttribute(
                "aria-expanded",
                menuIsOpen.toString()
            );

            menuButton.textContent = menuIsOpen ? "✕" : "☰";
        });

        // Close the mobile menu after a navigation link is clicked.
        const links = navigationLinks.querySelectorAll("a");

        links.forEach(function (link) {
            link.addEventListener("click", function () {
                navigationLinks.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.textContent = "☰";
            });
        });
    }

    // Smoothly scroll to sections when internal links are clicked.
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
