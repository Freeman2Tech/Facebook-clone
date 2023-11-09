const hiddenText = document.querySelector(".remove-text");
const btn = document.querySelector(".close-box");
const p1 = document.querySelector(".profile1");
hiddenText.classList.add("hide");
btn.addEventListener("mouseover", function () {
  hiddenText.classList.remove("hide");
});
btn.addEventListener("mouseout", function () {
  hiddenText.classList.add("hide");
});

btn.addEventListener("click", () => {
  p1.classList.add("hide");
});
