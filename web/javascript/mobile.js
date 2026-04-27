const toggleButton = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    // Change icon
    if (menu.classList.contains("active")) {
        toggleButton.innerHTML = 'a-solid fa-angle-up';
    } else {
        toggleButton.innerHTML = 'fa-solid fa-ellipsis';
    }
});
