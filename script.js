"use strict";
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open__menu");
  });
});
const sliderLine = document.querySelector(".about-image-slider");
const left = document.querySelector(".left_arrow");
const right = document.querySelector(".right_arrow");
const pags = document.querySelectorAll(".pagination_button");
let offset = 0;
let pagIndex = 0;
const nextSlide = () => {
  if (offset < (pags.length - 1) * 450) {
    offset += 450;
  }
  if (offset > 1350) {
    right.setAttribute("disabled", "disabled");
    right.style.opacity = "0.33";
  }
  left.style.opacity = "1";
  left.removeAttribute("disabled");
  sliderLine.style.left = -offset + "px";
};
left.setAttribute("disabled", "disabled");
left.style.opacity = "0.33";
const prevSlide = () => {
  if (offset > 0) {
    offset -= 450;
  }
  if (offset < 450) {
    left.setAttribute("disabled", "disabled");
    left.style.opacity = "0.33";
  }
  sliderLine.style.left = -offset + "px";
  right.style.opacity = "1";
  right.removeAttribute("disabled");
};
right.addEventListener("click", nextSlide);
left.addEventListener("click", prevSlide);
pags.forEach((pag, index) => {
  pag.addEventListener("click", () => {
    offset = 450 * index;
    sliderLine.style.left = -offset + "px";
    if (offset < 450) {
      left.setAttribute("disabled", "disabled");
      left.style.opacity = "0.33";
      right.style.opacity = "1";
      right.removeAttribute("disabled");
    } else if (offset > 1350) {
      right.setAttribute("disabled", "disabled");
      right.style.opacity = "0.33";
      left.style.opacity = "1";
      left.removeAttribute("disabled");
    } else if (450 <= offset <= 1350) {
      left.style.opacity = "1";
      left.removeAttribute("disabled");
      right.style.opacity = "1";
      right.removeAttribute("disabled");
    }
  });
});
const aboutCarousel = document.querySelector("#about_carousel");
const pagBtn1 = document.querySelector("#pag_btn-1");
const pagBtn2 = document.querySelector("#pag_btn-2");
const pagBtn3 = document.querySelector("#pag_btn-3");
const pagBtn4 = document.querySelector("#pag_btn-4");
const pagBtn5 = document.querySelector("#pag_btn-5");
const circle1 = document.querySelector("#circle1");
const circle2 = document.querySelector("#circle2");
const circle3 = document.querySelector("#circle3");
const circle4 = document.querySelector("#circle4");
const circle5 = document.querySelector("#circle5");

pagBtn1.setAttribute("disabled", "disabled");

pagBtn1.addEventListener("click", () => {
  circle1.style.backgroundColor = "#BB945F";
  circle2.style.backgroundColor = "#0C0C0E";
  circle3.style.backgroundColor = "#0C0C0E";
  circle4.style.backgroundColor = "#0C0C0E";
  circle5.style.backgroundColor = "#0C0C0E";
  pagBtn1.setAttribute("disabled", "disabled");
  pagBtn2.removeAttribute("disabled", "disabled");
  pagBtn3.removeAttribute("disabled", "disabled");
  pagBtn4.removeAttribute("disabled", "disabled");
  pagBtn5.removeAttribute("disabled", "disabled");
});

pagBtn2.addEventListener("click", () => {
  circle2.style.backgroundColor = "#BB945F";
  circle1.style.backgroundColor = "#0C0C0E";
  circle3.style.backgroundColor = "#0C0C0E";
  circle4.style.backgroundColor = "#0C0C0E";
  circle5.style.backgroundColor = "#0C0C0E";
  pagBtn2.setAttribute("disabled", "disabled");
  pagBtn1.removeAttribute("disabled", "disabled");
  pagBtn3.removeAttribute("disabled", "disabled");
  pagBtn4.removeAttribute("disabled", "disabled");
  pagBtn5.removeAttribute("disabled", "disabled");
});

pagBtn3.addEventListener("click", () => {
  circle3.style.backgroundColor = "#BB945F";
  circle1.style.backgroundColor = "#0C0C0E";
  circle2.style.backgroundColor = "#0C0C0E";
  circle4.style.backgroundColor = "#0C0C0E";
  circle5.style.backgroundColor = "#0C0C0E";
  pagBtn3.setAttribute("disabled", "disabled");
  pagBtn1.removeAttribute("disabled", "disabled");
  pagBtn2.removeAttribute("disabled", "disabled");
  pagBtn4.removeAttribute("disabled", "disabled");
  pagBtn5.removeAttribute("disabled", "disabled");
});

pagBtn4.addEventListener("click", () => {
  circle4.style.backgroundColor = "#BB945F";
  circle1.style.backgroundColor = "#0C0C0E";
  circle2.style.backgroundColor = "#0C0C0E";
  circle3.style.backgroundColor = "#0C0C0E";
  circle5.style.backgroundColor = "#0C0C0E";
  pagBtn4.setAttribute("disabled", "disabled");
  pagBtn1.removeAttribute("disabled", "disabled");
  pagBtn2.removeAttribute("disabled", "disabled");
  pagBtn3.removeAttribute("disabled", "disabled");
  pagBtn5.removeAttribute("disabled", "disabled");
});

pagBtn5.addEventListener("click", () => {
  circle5.style.backgroundColor = "#BB945F";
  circle1.style.backgroundColor = "#0C0C0E";
  circle2.style.backgroundColor = "#0C0C0E";
  circle3.style.backgroundColor = "#0C0C0E";
  circle4.style.backgroundColor = "#0C0C0E";
  pagBtn5.setAttribute("disabled", "disabled");
  pagBtn1.removeAttribute("disabled", "disabled");
  pagBtn2.removeAttribute("disabled", "disabled");
  pagBtn3.removeAttribute("disabled", "disabled");
  pagBtn4.removeAttribute("disabled", "disabled");
});
