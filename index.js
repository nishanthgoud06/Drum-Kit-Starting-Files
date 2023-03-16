var op=document.querySelectorAll(".drum").length
for(var i=0;i<=op;i++){


document.querySelectorAll("button")[i].addEventListener("click",function (){

  var varInnerElement=this.innerHTML;
    makesound(varInnerElement);
    animate(varInnerElement);
});
}
document.addEventListener("keypress" , function(e) {

  makesound(e.key);
  //buttonAnimation(event.key);
  animate(e.key);
});

function makesound(alpha){
  switch (alpha) {
    case "w":
      var carshsong=new Audio("/Users/nishanthgoud/Documents/Web devlopment/Drum Kit Starting Files/sounds/crash.mp3");
      carshsong.play();
      break;
    case "a":
    var kicksound=new Audio("sounds/kick-bass.mp3");
    kicksound.play();
    break;
    case "s":
    var snaresound=new Audio("sounds/snare.mp3");
    snaresound.play();
    break;
    case "d":
    var tim_1_sound=new Audio("sounds/tom-1.mp3");
    tim_1_sound.play();
    break;
    case "j":
    var tim_2_sound=new Audio("sounds/tom-2.mp3");
    tim_2_sound.play();
    break;
    case "k":
    var tim_3_sound=new Audio("sounds/tom-3.mp3");
    tim_3_sound.play();
    break;
    case "l":
    var tim_4_sound=new Audio("sounds/tom-4.mp3");
    tim_4_sound.play();
    break;
    default:

  }
}
function animate(e){
  var activeButton=document.querySelector("."+e);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
