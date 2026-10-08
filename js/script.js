const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.querySelector(".navbar-collapse");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const menu = bootstrap.Collapse.getInstance(navbar);

        if (menu) {
            menu.hide();
        }
    });
});