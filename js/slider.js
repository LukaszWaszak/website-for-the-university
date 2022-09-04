const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const pagination1 = document.querySelector("#dot1");
const pagination2 = document.querySelector("#dot2");
const pagination3 = document.querySelector("#dot3");
const pagination4 = document.querySelector("#dot4");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});




function carousel() {
  // working with slides
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  // working with buttons

  if (counter < slides.length - 1) {
    nextBtn.style.display = "hidden";
  } else {
    // nextBtn.style.display = "none";
  }
  if (counter >= 0) {
  } else {
    // prevBtn.style.display = "none";
  }

  if (counter === 0) {
    pagination1.classList.add("active-pagination")
    pagination2.classList.remove("active-pagination")
    pagination3.classList.remove("active-pagination")
    pagination4.classList.remove("active-pagination")
  }
  if (counter === 1) {
    pagination1.classList.remove("active-pagination")
    pagination2.classList.add("active-pagination")
    pagination3.classList.remove("active-pagination")
    pagination4.classList.remove("active-pagination")
  }
  if (counter === 2) {
    pagination1.classList.remove("active-pagination")
    pagination2.classList.remove("active-pagination")
    pagination3.classList.add("active-pagination")
    pagination4.classList.remove("active-pagination")
  }
  if (counter === 3) {
    pagination1.classList.remove("active-pagination")
    pagination2.classList.remove("active-pagination")
    pagination3.classList.remove("active-pagination")
    pagination4.classList.add("active-pagination")
  }


  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });

}



