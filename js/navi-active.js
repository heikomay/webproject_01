/* Get Element */
var header = document.getElementById("main-nav");
/* Get elements inside main-nav */ 
var link = header.getElementsByTagName("a");
/* Set first element to active  */ 
link[0].className += " active";
/* Iterate for each element */ 
for (var i = 0; i < link.length; i++) {
    /* For each element add click */ 
    link[i].addEventListener("click", function() {
    /* Get current element with class active */ 
    var current = document.getElementsByClassName("active");
    /* If not first element*/
  if (current.length > 0) { 
    /* Replace active class on first element */ 
    current[0].className = current[0].className.replace(" active", "");
  }
  /* Add active class to current element */ 
  this.className += " active";
  });
}