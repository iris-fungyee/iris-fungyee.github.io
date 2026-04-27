const toggleButton = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");
const icon = toggleButton.querySelector("i");

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        icon.classList.remove("fa-ellipsis");
        icon.classList.add("fa-angle-up");
    } else {
        icon.classList.remove("fa-angle-up");
        icon.classList.add("fa-ellipsis");
    }
});