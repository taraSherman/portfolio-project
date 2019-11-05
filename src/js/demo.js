let slideIndex = 0;
slideshow();

function slideshow() {
  let i;
  let x = document.getElementsByClassName("demoSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(slideshow, 3500); // Change image every 3.5 seconds
}