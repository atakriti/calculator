let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
// ======== Background Color ===============
let colorBgInput = document.querySelector("#c-btn");
// let colorBgForm = document.querySelector("#c-btn-form")
// ============== Font Color =============
let colorFontInput = document.querySelector("#c-font");
// let colorFontForm = document.querySelector("#c-font-form")
let form = document.querySelectorAll("form");
buttons.forEach((p) => {
  p.addEventListener("click", (e) => {
    if (e.target.innerText == "C") {
      display.innerText = "";
    } else if (e.target.innerText == "←") {
      display.innerText = display.innerText.slice(0, -1);
    } else if (e.target.innerText == "=") {
      try {
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = "Error!";
        setTimeout(() => (display.innerText = ""), 1000);
      }
    } else {
      display.innerText += e.target.innerText;
    }
  });
});

form.forEach((p) => {
  p.addEventListener("submit", (e) => {
    e.preventDefault();
    if (p.matches("#c-btn-form")) {
      buttons.forEach((b) => {
        b.style.backgroundColor = colorBgInput.value;
      });
    } else if (p.matches("#c-font-form")) {
      buttons.forEach((b) => {
        b.style.color = colorFontInput.value;
      });
    }
  });
});
