// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let dropDown = document.getElementById("horn-select");
  let image = document.querySelector('img[src="assets/images/no-image.png"]');
  let option = dropDown.options[dropDown.selectedIndex].text;
  dropDown.addEventListener("click", function() {
    option = dropDown.options[dropDown.selectedIndex].text;
    if(option == "Air Horn") {
      image.src = "assets/images/air-horn.svg";
    } else if(option == "Car Horn") {
      image.src = "assets/images/car-horn.svg";
    } else if(option == "Party Horn") {
      image.src = "assets/images/party-horn.svg";
    }
  });

  let slider = document.getElementById("volume");

  slider.addEventListener('input', function() {
    const volume = this.value; 
    const audioPlayer = document.querySelector('audio');
    const volumeIcon = document.querySelector('#volume-controls img');

    audioPlayer.volume = volume / 100;
    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Mute';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume Level 1';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume Level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  }); 

  let soundBtn = document.querySelector("button");
  let aud = document.querySelector('audio[class="hidden"]');
  const jsConfetti = new JSConfetti()

  soundBtn.addEventListener("click", function() {
    console.log(aud.src);
    if(option == "Air Horn") {
      aud.src = "assets/audio/air-horn.mp3";
      aud.play();
    } else if(option == "Car Horn") {
      aud.src = "assets/audio/car-horn.mp3";
      aud.play();
    } else if(option == "Party Horn") {
      aud.src = "assets/audio/party-horn.mp3";
      aud.play();
      jsConfetti.addConfetti()
    }
  })

 

}