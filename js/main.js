
var slideIndex = 0;



carousel();
showDivs(slideIndex);

function plusSlides(n) {
  showDivs(slideIndex += n);
}


function currentSlide(n) {
  showDivs(slideIndex = n);
}

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(carousel, 10000); // Change image every 10 seconds
}


function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
