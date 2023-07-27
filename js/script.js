{

console.log("Hello, World!");

const switchHeaderButton = document.querySelector(".article__switchHeaderButton");
const mainHeader = document.querySelector(".header");
const mainHeaderDarker = document.querySelector(".js-article__switchHeaderButton");
const switchBackgroundButton = document.querySelector(".article__switchBackgroundButton");
const body = document.querySelector(".body");
const bodyDarker = document.querySelector(".js-article__switchBackgroundButton");

switchHeaderButton.addEventListener("click", () => {
  mainHeader.classList.toggle("header--darker");

  mainHeaderDarker.innerText =
    mainHeader.classList.contains("header--darker") ? "domyślny" : "inny";
});

switchBackgroundButton.addEventListener("click", () => {
  body.classList.toggle("body--darker");

  bodyDarker.innerText =
    body.classList.contains("body--darker") ? "domyślny" : "inny";
});

}