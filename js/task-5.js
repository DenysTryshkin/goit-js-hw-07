function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

changeColor.addEventListener("click", () => {
  const getRandomColor = getRandomHexColor();

  document.body.style.background = getRandomColor;
  textColor.textContent = getRandomColor;
});