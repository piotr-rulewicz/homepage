console.log("Hello, World!");

let switchHeaderButton = document.querySelector(".article__switchHeaderButton");
let mainHeader = document.querySelector(".header");
let mainHeaderDarker = document.querySelector(".js-article__switchHeaderButton");
let switchBackgroundButton = document.querySelector(".article__switchBackgroundButton");
let body = document.querySelector(".body");
let bodyDarker = document.querySelector(".js-article__switchBackgroundButton");

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