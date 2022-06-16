let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let pop = document.querySelector(".pop")
let pop1 = document.querySelector(".pop1")

// ======== Background Color ===============
let colorBgInput = document.querySelector("#c-btn");
let colorBgInputMo = document.querySelector("#c-btn-mo");
// ============== Font Color =============
let colorFontInput = document.querySelector("#c-font");
let colorFontInputMo = document.querySelector("#c-font-mo");
// ========== forms ==========
let form = document.querySelectorAll(".form");
let formMo = document.querySelectorAll(".form1");
// ========= custom color btn =========
let customColor = document.querySelector(".custom-color")
let customColorMo = document.querySelector(".mo")
buttons.forEach((p) => {
    p.addEventListener("click", (e) => {
      console.log(e)
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



formMo.forEach(p => {
    p.addEventListener("submit", (e) => {
        e.preventDefault()
        if (p.matches("#c-btn-form-mo")) {
            buttons.forEach(b => {
                b.style.backgroundColor = colorBgInputMo.value
            })
        } else if (p.matches("#c-font-form-mo")) {
            buttons.forEach(b => {
                b.style.color = colorFontInputMo.value
            })
        }
    })
})



// ========= custom color ========
// pop.style.width = "0"
pop.style.transform = "translate(30%)"
pop.style.opacity = "0"
customColor.addEventListener("click", () => {
    if (pop.style.transform === "translate(30%)") {
        setTimeout(() => (pop.style.transform = "translate(0%)", pop.style.opacity = "1"), 100)
        // pop.style.opacity = "1"
        // pop.classList.add("popUp")
        pop.style.animation = "popUp 1s"
    } else {
        // pop.style.transform = "translate(30%)"
       setTimeout(() => ( pop.style.transform = "translate(30%)",pop.style.opacity = "0"),100)
       pop.style.animation = "popOut 1s"

        // pop.style.opacity = "0"
        // pop.classList.add("popOut")
    }
})


// ================= mobile ====================

pop1.style.transform = "scale(0)"
pop1.style.opacity = "0"
customColorMo.addEventListener("click", () => {
    if (pop1.style.transform === "scale(0)") {
        setTimeout(() => (pop1.style.transform = "scale(1)", pop1.style.opacity = "1"), 100)
        pop1.style.animation = "popScaleUp 2s"
    } else {
       setTimeout(() => ( pop1.style.transform = "scale(0)",pop1.style.opacity = "0"),1000)
    //    pop1.style.animation = "popOut 2s"
    pop1.style.animation = "popScaleDown 2s"
        

  
    }
})