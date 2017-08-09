$(function () {
  $('form').submit(function (event) {
    event.preventDefault();
  var color_one = $('.color1').val();
  var color_two = $('.color2').val();
  var color_three = $('.color3').val();
  
  console.log(color_one, color_two, color_three);
  $('.box1').css('background-color', color_one);
  $('.box2').css('background-color', color_two);
  $('.box3').css('background-color', color_three);
  });
}); // end of javascript...