const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");

const content1 = document.getElementById("content-1");
const content2 = document.getElementById("content-2");

btn1.addEventListener("click", () => {

    btn1.classList.add("active");
    content1.classList.add("active");

    btn2.classList.remove("active");
    content2.classList.remove("active");
});

btn2.addEventListener("click", () => {
    btn2.classList.add("active");
    content2.classList.add("active");

    btn1.classList.remove("active");
    content1.classList.remove("active");
});