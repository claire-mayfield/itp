let SwordSearch;

let SpaceRunner;

let Exploration;

function preload() {
  console.log("entering function preload")
  soundFormats('wav', 'mp3');  
  SwordSearch = loadSound('SwordSearch.wav', SwordSearchLoaded);
  SpaceRunner = loadSound('SpaceRunner.wav', SpaceRunnerLoaded);
  Exploration = loadSound('Exploration.wav', ExplorationLoaded);
}

function setup() {
  console.log("entering function setup")
  createCanvas(600, 400);
  let bkcolor = color(157, 222, 230)
  background(bkcolor)
  let rectcolor = color(0, 0 , 0, 0)
  fill(rectcolor)
  strokeWeight(20);
  rect (0, 0, 600, 400)
  textcolor = color(0,0,0)
  fill(textcolor)
  textSize(20);  
  textAlign(CENTER, CENTER);
  text("Welcome! Press the keys below to play different songs. \n\n\nS to play Sword Search.\nR to play Space Runner.\nE to play Exploration.\n\n\nMusic by Claire Mayfield. Thanks for listening!", width / 2, height / 2);
}

function SwordSearchLoaded() {
  console.log("Sword Search successfully loaded!");
}

function SpaceRunnerLoaded() {
  console.log("Space Runner successfully loaded!");
}

function ExplorationLoaded() {
  console.log("Exploration successfully loaded!");
}

function keyPressed() {
  console.log("Key pressed:", key);
  if (key.toLowerCase() === 's') {
    playSwordSearch();
  }
  if (key.toLowerCase() === 'r') {
    playSpaceRunner();
  }
  if (key.toLowerCase() === 'e') {
    playExploration();
  }
}

function playSwordSearch() {
  if (SwordSearch.isLoaded()) {
    SwordSearch.play();
    console.log("Sword Search played.");
  } else {
    console.log("Sword Search not loaded yet.");
  }
}

function playSpaceRunner() {
  if (SpaceRunner.isLoaded()) {
    SpaceRunner.play();
    console.log("Space Runner played.");
  } else {
    console.log("Space Runner not loaded yet.");
  }
}

function playExploration() {
  if (Exploration.isLoaded()) {
    Exploration.play();
    console.log("Exploration played.");
  } else {
    console.log("Exploration not loaded yet.");
  }
}