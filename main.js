let questionTitle = document.querySelectorAll(".question-title");

questionTitle.forEach(el => {
    el.addEventListener("click", (e) => {
        el.classList.toggle("active");
    });
});
