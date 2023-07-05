document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');
  
    hamburgerBtn.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  
    // Close the menu when a navigation option is clicked
    const navA = document.querySelectorAll('.navA');
  
    navA.forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
      });
    });
  });

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
