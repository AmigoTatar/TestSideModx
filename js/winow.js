$(document).ready(function(){
  $('.counerButton .buton').click(function(e){
    $('#popup').css('top',$(this).offset().top).show();
    e.preventDefault();
  });
}); 