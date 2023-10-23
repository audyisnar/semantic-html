const dropdownButton = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hide");
});

window.addEventListener("click", (e) => {
    console.log(e)
    if(e.target !== dropdownButton){
        dropdownMenu.classList.add("hide");
    }
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  console.log(slides)
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}