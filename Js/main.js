$(function(){

    // sticky navbar
    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop();
  
        if (scroll < 245) {
          $(".navbar").removeClass("sticky");
        } else {
          $(".navbar").addClass("sticky");
        }
        
    });

});