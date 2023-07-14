window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition < window.innerHeight) {
    document.getElementById('background1').style.top = -scrollPosition + 'px';
  } else {
    document.getElementById('background1').style.top = -window.innerHeight + 'px';
    document.getElementById('background2').style.top = -(scrollPosition - window.innerHeight) + 'px';
  }
});

