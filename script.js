var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 5000); // Change image every 5 seconds
}

// JavaScript back-to-top
document.addEventListener("DOMContentLoaded", function() {
    var backToTopBtn = document.getElementById("back-to-top");
  
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 100) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });
  
    backToTopBtn.addEventListener("click", function() {
      window.scrollTo(0, 0);
    });
  });

// const menuToggle = document.querySelector('.menu-toggle');
// menuToggle.addEventListener('click', function() {
//   console.log("oi");
//   this.checked = !this.checked;
// });

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function() {
  nav.classList.toggle('open');
});