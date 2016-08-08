var speed = 300;

$(function() {

  

  $('.work-nav-item').click(function(){
    if ($(this).hasClass('selected')) {
      $('.item-content').slideUp(speed);
      $(this).removeClass('selected');
    } else {
      $('.item-content').slideUp(speed);
      $('.work-nav-item').removeClass('selected');
      $(this).children('.item-content').slideDown(speed);
      $(this).addClass('selected');
    }
  });
});