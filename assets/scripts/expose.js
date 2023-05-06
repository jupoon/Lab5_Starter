// expose.js

window.addEventListener('DOMContentLoaded', init);
let jsConfetti = new JSConfetti();

function init() {
  let hornselect = document.getElementById('horn-select');
  hornselect.addEventListener('input', changeHorn);

  let volume = document.getElementById('volume-controls');
  volume.addEventListener('change', setVolume);

  let sound = document.querySelector("button");
  sound.addEventListener('click', function(){
    if (hornselect.value == "party-horn")
    {
      jsConfetti.addConfetti();
    }
    var audio = document.querySelector("audio");
    audio.play();
  });
}

function changeHorn(e){
  console.log(e.target.value);
  var horn = e.target.value;
  var img = document.querySelector("header + img");
  var audio = document.querySelector("audio");

  if(horn == "air-horn"){
    img.src = "assets/images/air-horn.svg";
    audio.src = "assets/audio/air-horn.mp3";
  }
  if(horn == "car-horn"){
    img.src = "assets/images/car-horn.svg";
    audio.src = "assets/audio/car-horn.mp3";
  }
  if(horn == "party-horn"){
    img.src = "assets/images/party-horn.svg";
    audio.src = "assets/audio/party-horn.mp3";
  }
}

function setVolume(e){
  console.log(e.target.value);
  var vol = e.target.value;
  var volImage = document.querySelector("#volume + img");
  var audio = document.querySelector("audio");

  if(vol == 0){
    volImage.src = "assets/icons/volume-level-0.svg";
  } else if (vol < 33){
    volImage.src = "assets/icons/volume-level-1.svg";
  } else if (vol < 67){
    volImage.src = "assets/icons/volume-level-2.svg";
  } else{
    volImage.src = "assets/icons/volume-level-3.svg";
  }
  audio.volume = audio/100;
}