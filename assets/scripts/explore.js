// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  let voices = [];
  
  setTimeout(() => {
    voices = synth.getVoices();
    console.log(window.speechSynthesis.getVoices());
    
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      voiceSelect.appendChild(option);
    }
  }, 50);

  let speak = document.querySelector("button");
  speak.addEventListener("click", function(){
    var inputTxt = document.getElementById("text-to-speak");
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.value;
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    var img = document.querySelector("header + img");    
    setInterval(function () {
      if(synth.speaking)
      {
        console.log("still here");
        img.src = "assets/images/smiling-open.png";
      }
      else
      {
        img.src = "assets/images/smiling.png";
        clearInterval();
      }
    }, 5);
    
    inputTxt.blur();
  })
}