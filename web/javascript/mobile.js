const toggleButton = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    // Change icon
    if (menu.classList.contains("active")) {
        toggleButton.classList.replace = '<i class= "fa-solid fa-angle-up"></i>';
    } else {
        toggleButton.classList.replace = '<i class= "fa-solid fa-ellipsis"></i>';
    }
});
