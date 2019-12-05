const checkBox = document.querySelector(".checkbox");
const toggleSwitch = document.querySelector(".switch");
const basic = document.querySelector(".basic");
const professional = document.querySelector(".professional");
const master = document.querySelector(".master");

loadEventListeners();

function loadEventListeners() {
  toggleSwitch.addEventListener("click", addText);
  checkBox.addEventListener("keyup", addText2);
}

function addText() {
  if (checkBox.checked === true) {
    basic.textContent = "199.99";
    professional.textContent = "249.99";
    master.textContent = "399.99";
  } else {
    basic.textContent = "19.99";
    professional.textContent = "24.99";
    master.textContent = "39.99";
  }
}

function addText2(e) {
  if (e.code === "Space") {
    if (checkBox.checked === true) {
      basic.textContent = "199.99";
      professional.textContent = "249.99";
      master.textContent = "399.99";
    } else {
      basic.textContent = "19.99";
      professional.textContent = "24.99";
      master.textContent = "39.99";
    }
  }
}
