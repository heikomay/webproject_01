$(function() {
    var pull 	 = $('#toggle-nav');
      menu 		 = $('nav');
      menuHeight = menu.height();

    $(pull).on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass("toggle-nav-button toggle-nav-button-close");
      menu.slideToggle();
    });
});