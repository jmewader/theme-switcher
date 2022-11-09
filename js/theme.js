const LIGHT = "./css/light-theme.css";
const DARK = "./css/dark-theme.css";
const theme = document.querySelector("#theme-link");

if (!localStorage.theme) localStorage.theme = LIGHT;
theme.href = localStorage.theme;

let radio_items = document.getElementsByName("theme");
let btn = (document.getElementById("data-save").onclick = checkRadio);

function checkRadio() {
  let theme_styled = "";

  radio_items.forEach((elem) => {
    if (elem.checked) {
      if (elem.value == "light") {
        theme.href = LIGHT;
      } else {
        theme.href = DARK;
      }
      theme_styled = theme.href;
    }
  });

  localStorage.theme = theme_styled;
}
