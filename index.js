var slideIndex = [1,1,1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2", "mySlides3"]
var dotId = ["dots1", "dots2", "dots3"]

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  var d = document.getElementsByClassName(dotId[no]);

  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }

  if (n > d.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = d.length}
  for (i = 0; i < d.length; i++) {
    d[i].className = d[i].className.replace(" active", "");
  }

  x[slideIndex[no]-1].className += " active";
  d[slideIndex[no]-1].className += " active";
}

var touchstartEvent;
function swipeSlides() {
  const slideElm = document.getElementsByClassName('slideshow-container')
  Array.from(slideElm).forEach(slideElm => {
    slideElm.addEventListener('touchstart', (e) => {
      touchstartEvent = e
    })

    slideElm.addEventListener('touchend', (e) => {
      handleSwipe(e, parseInt(slideElm.attributes.dataindex.value))
      e.stopPropagation()
    })
  })
}

function handleSwipe(touchMoveEvent, ind) {
  if (!ind) return

  const isGoLeft = touchstartEvent.changedTouches[0].pageX - touchMoveEvent.changedTouches[0].pageX >= 0
  isGoLeft ? plusSlides(-1, ind) : plusSlides(1, ind)
}

window.onload = function () {
  showSlides(1, 0);
  showSlides(1, 1);
  showSlides(1, 2);
  swipeSlides()
}