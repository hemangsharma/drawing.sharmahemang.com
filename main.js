const menuIcon = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");


menuIcon.addEventListener("click",() => {
  
  navbar.classList.toggle("change");

});


document.getElementById("year").innerHTML = new Date().getFullYear();



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("logoimg");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000);
}