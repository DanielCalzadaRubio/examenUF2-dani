// Agafem el player i el boto on li donarem click per encendre el audio
let player = document.getElementById('player');
let audio = document.getElementById('audio');

// Diem que cuan es faci click a audio faci una funció on fara play el player (el audio)
audio.addEventListener('click', function() {
    player.play();
})