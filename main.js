

$(function () {
  $('.main ul').hide();
  $('.menu').click(function() {
    $('.files').slideUp(500);
    $(this).find('.files').show()
   });
});
// $(this).find('ul').show()
