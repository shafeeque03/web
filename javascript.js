function scrollToTop(){
    window.scrollTo(0,0);
  }

  function fadeLeftOnScroll() {
    var fadeLeftDivs = document.querySelectorAll(".fade-left");
    var windowHeight = window.innerHeight;
  
    for (var i = 0; i < fadeLeftDivs.length; i++) {
      var fadeLeftDiv = fadeLeftDivs[i];
      var fadeLeftDivPosition = fadeLeftDiv.getBoundingClientRect().top;
  
      if (fadeLeftDivPosition < windowHeight / 1.5) {
        fadeLeftDiv.classList.add("fade-in");
      }
    }
  }
  
  window.addEventListener("scroll", fadeLeftOnScroll);