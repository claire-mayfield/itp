# Documentation

Here is the first version of my code. This code was copied exactly from the code from our class midterm instructions. The only thing I changed in this first version is the name of the audio file to be played (SwordSearch.wav), and I uploaded the file as well:  

`let myFirstSound;

function preload() {
  soundFormats('wav', 'mp3');  
  myFirstSound = loadSound('SwordSearch.wav', soundLoaded);
}

function setup() {
  createCanvas(400, 200);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Move your cursor to the 'Preview' section\nPress 'P' to play sound", width / 2, height / 2);
}

function soundLoaded() {
  console.log("Sound successfully loaded!");
}

function keyPressed() {
  console.log("Key pressed:", key);
  if (key.toLowerCase() === 'p') {
    playCustomSound();
  }
}

function playCustomSound() {
  if (myFirstSound.isLoaded()) {
    myFirstSound.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}`

