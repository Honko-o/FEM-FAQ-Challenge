let questionTitle = document.querySelectorAll(".question-title");

for (let i = 0; i < questionTitle.length; i++) {
    questionTitle[i].addEventListener("click", (e) => {
        questionTitle[i].classList.toggle("active");
    });
}