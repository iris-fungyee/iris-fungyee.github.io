const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content-box");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        // remove active from all tabs
        tabs.forEach(t => t.classList.remove("active"));

        // remove active from all content
        contents.forEach(c => c.classList.remove("active"));

        // add active to clicked tab + matching content
        tab.classList.add("active");
        contents[index].classList.add("active");
    });
});