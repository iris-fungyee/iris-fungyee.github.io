const toggleButton = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");
const icon = toggleButton.querySelector("i");
const dropdown = document.getElementById("dropdown");
const iconarrow = document.getElementById("dropdown-icon");

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");

    gsap.fromTo(icon,
        {
            rotation: 0
        },
        {
            rotation: 180,
            duration: 0.3
        }
    );

    if (menu.classList.contains("active")) {
        icon.classList.remove("fa-ellipsis");
        icon.classList.add("fa-angle-up");
    } else {
        icon.classList.remove("fa-angle-up");
        icon.classList.add("fa-ellipsis");
    }

});

dropdown.addEventListener("click", (event) => {
    if (window.innerWidth <= 680) {
        event.preventDefault();
        dropdown.classList.toggle("active");

        if (dropdown.classList.contains("active")) {
            iconarrow.classList.remove("fa-angle-down");
            iconarrow.classList.add("fa-angle-up");
        } else {
            iconarrow.classList.remove("fa-angle-up");
            iconarrow.classList.add("fa-angle-down");
        }
    }

});