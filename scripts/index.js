function slowScroll(id) {
      
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 500);

}

  $(document).on("scroll", function () {
    if($(window).scrollTop() === 0)
  
  $("header").removeClass("fixed");
    else
  $("header").attr("class", "fixed");
});

$(function() {
  
  $(window).scroll(function() {
  
    if($(this).scrollTop() != 0) {     
      $('#topButton').fadeIn();
    } else {  
      $('#topButton').fadeOut();

    }
  
  });
  
$('#topButton').click(function() {
  
  $('body,html').animate({scrollTop:0},700);
  });

});

function showText (el) {
  
  if(el.previousElementSibling.clientHeight === 80) {
    
    el.previousElementSibling.style.height = "100%";
    el.innerHTML = "Менше";
  
  } else {
    
    el.previousElementSibling.style.height = "80px";
    el.innerHTML = "Більше";
  
  }
}