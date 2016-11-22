

$(function () {
  $('.files').hide();
  $('.menu').click(function() {
    $('.files').slideUp(500);
    $(this).find('.files').show()
   });
});
 // $('.main ul').hide();
// $(this).find('ul').show()
