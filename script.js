var i = 0;
var audio = new Audio("sound/quack.mp3")
var loading_done = false;

function loading() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("progress_bar");
    var width = 0;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        loading_done = true;
      }
      else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

function play_audio() {
  if(loading_done == true){
      audio.play();
  }
}
