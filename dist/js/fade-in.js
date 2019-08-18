function init() {
    // Get Elements as Array
    var elements = document.querySelectorAll('.fade-element');
    // Call function if window is loaded
    window.addEventListener('load', checkPosition);
    
    function checkPosition(){
        // Iterate to first 3 elements
        for(var i = 0; i < 4; i++) {
            (function(index) {
                // Show elements and fade in
                setTimeout(function() {
                    elements[index].classList.remove("hidden");
                    elements[index].classList.add("fade-in-element");
                }, index * 1000);
            })(i)
        }
    }
}
init();