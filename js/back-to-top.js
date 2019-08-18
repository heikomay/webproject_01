$(document).ready(function(){

    // Create Button with Javascript and append to the end of body as string
    var back_to_top_button = ['<a href="#top" class="back-to-top">Nach oben</a>'].join("");
    $("body").append(back_to_top_button)

    // Fade in and out
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $(".back-to-top").stop().animate( {"right": "0.5em"}, 250); 
 			} else {
 				$('.back-to-top').stop().animate( {"right": "-2.5em"}, 250);
 			}
 		});

 	// Start scroll
 	$('.back-to-top').click(startScroll);  
 	$('.back-to-top-start').click(startScroll);
 		function startScroll(){
 			$('body,html').animate({
 				scrollTop: 0
 			}, 800);
 			return false;
 		}
 	});
 });