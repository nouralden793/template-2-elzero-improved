let btn = document.querySelector("#btn");
let link = document.querySelector(".link");
let date = new Date();
let span = document.querySelector(".year");
span.textContent = `${date.getFullYear()}`;

btn.onclick = function () {
  link.classList.toggle("apper");
};
