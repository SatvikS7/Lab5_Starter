// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  document.addEventListener('DOMContentLoaded', function () {
    const synth = window.speechSynthesis;
    const faceImage = document.getElementById('face-image');
    const textArea = document.getElementById('text-to-speak');
    const voiceSelect = document.getElementById('voice-select');
    const talkBtn = document.getElementById('talk-button');

    function populateVoices() {
      if(synth.getVoices().length === 0) {
        synth.addEventListener('voiceschanged', populateVoices);
      }
      const voices = synth.getVoices();
      voiceSelect.innerHTML = voices.map(voice => 
      '<option value="${voice.name}">${voice.name} (${voice.lang})</option>').join('');
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
  })
}