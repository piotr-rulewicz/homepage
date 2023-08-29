{

const welcome = () => {
  console.log("Hello, World!");
}

welcome();

const init = () => {

const toogleHeaderColor = () => {
  const switchHeaderButton = document.querySelector(".article__switchHeaderButton");
  const mainHeader = document.querySelector(".header");
  const mainHeaderDarker = document.querySelector(".js-article__switchHeaderButton");
  
  switchHeaderButton.addEventListener("click", () => {
    mainHeader.classList.toggle("header--darker");
    
    mainHeaderDarker.innerText =
    mainHeader.classList.contains("header--darker") ? "domyślny" : "inny";
});
}

toogleHeaderColor();

const toogleBackgroundColor = () => {
  const switchBackgroundButton = document.querySelector(".article__switchBackgroundButton");
  const body = document.querySelector(".body");
  const bodyDarker = document.querySelector(".js-article__switchBackgroundButton");
  
  switchBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("body--darker");

    bodyDarker.innerText =
    body.classList.contains("body--darker") ? "domyślny" : "inny";
});
}

toogleBackgroundColor();

}

init();

}