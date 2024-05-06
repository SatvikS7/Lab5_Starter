// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const synth = window.speechSynthesis;
  const faceImage = document.querySelector('img[src="assets/images/smiling.png"]');
  const textArea = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const talkBtn = document.querySelector("button");
  console.log("Talk Button: ", talkBtn);

  function populateVoices() {
    console.log("hello")
    const voices = synth.getVoices();
    console.log("Voices found:", voices.length, voices);

    if(synth.getVoices().length === 0) {
      synth.addEventListener('voiceschanged', populateVoices);
      return;
    }
    
    voiceSelect.innerHTML = voices.map(voice => 
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`).join('');
  }

  populateVoices();

  function speak() {
    if (synth.speaking) {
      console.error('SpeechSynthesis is already speaking.');
      return;
    }
    if (textArea.value !== '') {
      const utter = new SpeechSynthesisUtterance(textArea.value);
      utter.voice = synth.getVoices().find(voice => voice.name === voiceSelect.value);
      utter.onstart = () => {
        faceImage.src = 'assets/images/smiling-open.png';
      };
      utter.onend = () => {
        faceImage.src = 'assets/images/smiling.png';
      };
      synth.speak(utter);
    }
  }
  talkBtn.addEventListener('click', speak);
}
