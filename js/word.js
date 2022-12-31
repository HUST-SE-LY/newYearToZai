const words = document.querySelectorAll(".word_detail");
const wordContainer = document.querySelector(".body");
let wordCounter = 0;

wordContainer.addEventListener("click", () => {
  if (wordCounter <= 6) {
    wordCounter++;
    words[wordCounter].className = "word_detail";
  }
});
