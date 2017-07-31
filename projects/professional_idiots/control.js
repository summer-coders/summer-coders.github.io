window.addEventListener("keypress", function key(event){
var key = event.keyCode;
  if(key === 119 || key === 87){
    
    console.log("hej")
    //event.preventDefault();
    //$("mike").css("right", "500px");
$(".mike").animate({
  right: "+=20px"
}, 100);
  } else if(key === 101){
  console.log("mike höger")
  $(".mike").animate({
    right: "-=x20px"
  }, 100);
  }


  
});



console.log("tomat")
// tangentbord höger vänster
var rightPressed = false;
var leftPressed = false;

// kopierar vad jag tror är deras kommandon
var aPressed = false;
var qPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


// styr vilken knapp som tas ner.
// var är keycodes för a och q?
// hittat på https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
// urspurngligen 39, 37
// a 65 q 81
var hogerTangent = 39;
var vansterTangent = 37;

// upp är 38


function keyDownHandler(e) {
    if(e.keyCode == hogerTangent) {
        rightPressed = true;
    }
    else if(e.keyCode == vansterTangent) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == hogerTangent) {
        rightPressed = false;
    }
    else if(e.keyCode == vansterTangent) {
        leftPressed = false;
    }
}


    
$(function () {
  //
  $("div").submit(function (event) {
    event.preventDefault();
    
    var color_one = $(".color1").val();
    var color_two = $(".color2").val();
    console.log(color_one, color_two, color_three);
    
    $(".mike").css("right",color_one);
    $(".sully").css("right",color_two);
    });
  });
  
  /*
window.addEventListener("keypress", function key(event){
  //if key is W set direction up
  var key = event.keyCode;
  if(direction != -1 && (key == 119 || key == 87)){
    tempdir = 0;
    console.log("oentuh"); }
  //if key is S set direction down
  else if(direction != 0 && (key == 115 || key == 83))
    tempdir = -1;
  //if key is A set direction left
  else if(direction != 2 && (key == 97 || key == 65))
    tempdir = 1;
  //if key is D set direction right
  else if(direction != 1 && (key == 100 || key == 68))
    tempdir = 2;
  if(!running)
      running = true;
  else if(key == 32)
      running = false;
});
*/
