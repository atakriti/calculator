let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
// ======== Background Color ===============
let colorBgInput = document.querySelector("#c-btn");
// ============== Font Color =============
let colorFontInput = document.querySelector("#c-font");
// ========== forms ==========
let form = document.querySelectorAll("form");
// ========= custom color btn =========
let customColor = document.querySelector(".custom-color")
let pop = document.querySelector(".pop")
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

// ========= custom color ========
// pop.style.width = "0"
pop.style.transform = "translate(30%)"
pop.style.opacity = "0"
customColor.addEventListener("click", () => {
    if (pop.style.transform === "translate(30%)") {
       setTimeout(() => ( pop.style.transform = "translate(0%)",pop.style.opacity = "1"),100)
        // pop.style.opacity = "1"
        // pop.classList.add("popUp")
        pop.style.animation = "popUp 2s"
    } else {
        // pop.style.transform = "translate(30%)"
       setTimeout(() => ( pop.style.transform = "translate(30%)",pop.style.opacity = "0"),100)
       pop.style.animation = "popOut 2s"

        // pop.style.opacity = "0"
        // pop.classList.add("popOut")
    }
})