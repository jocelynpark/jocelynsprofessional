var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (window.innerWidth < 768) {
    slides[slideIndex - 1].style.display = "block";
  } else {
    for (i = slideIndex - 1; i < slideIndex + 2; i++) {
      if (i >= slides.length) {
        slides[i - slides.length].style.display = "block";
      } else if (i < 0) {
        slides[slides.length + i].style.display = "block";
      } else {
        slides[i].style.display = "block";
      }
    }
  }
}

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
prev.addEventListener("click", () => {
  plusSlides(-1);
});
next.addEventListener("click", () => {
  plusSlides(1);
});
