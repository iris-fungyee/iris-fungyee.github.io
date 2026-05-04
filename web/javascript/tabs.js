const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".content-box");

tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {

        tabButtons.forEach(btn => btn.classList.remove("active"));

        tabContents.forEach(content => content.classList.remove("active"));

        button.classList.add("active");

        tabContents[index].classList.add("active");
    });
});