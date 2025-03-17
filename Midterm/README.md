# DOCUMENTATION

# Version 1: 
**-This code was copied exactly from the code from our class midterm instructions. The only thing I changed in this first version is the name of the audio file to be played (SwordSearch.wav), and I uploaded the file as well. Running this code will play my Sword Search file when the 'p' key is pressed:**  

let myFirstSound;

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
}

# Version 2: 
**-I customized the text that appears on the screen when the code is run. I added some empty lines in between sentences for easier reading. With the added text, I needed to change the size of the canvas to 600, 400. I also decided on which key would be assigned to each audio file:** 

let myFirstSound;

function preload() {
  soundFormats('wav', 'mp3');  
  myFirstSound = loadSound('SwordSearch.wav', soundLoaded);
}

function setup() {
  createCanvas(600, 400);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Welcome! Press the keys below to play different songs. \n\n\nS to play Sword Search.\nR to play Space Runner.\nE to play Exploration.\n\n\nMusic by Claire Mayfield. Thanks for listening!", width / 2, height / 2);
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
}

# Version 3: 
**-I renamed the functions involving my first audio file, which is titled "SwordSearch.wav." This doesn't effect the way that the code runs, but makes the code easier to decipher and understand. I changed "let myFirstSound" to "let SwordSearch," and then I changed "playCustomSound" to "playSwordSearch:"**

let SwordSearch;

function preload() {
  soundFormats('wav', 'mp3');  
  SwordSearch = loadSound('SwordSearch.wav', soundLoaded);
}

function setup() {
  createCanvas(600, 400);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Welcome! Press the keys below to play different songs. \n\n\nS to play Sword Search.\nR to play Space Runner.\nE to play Exploration.\n\n\nMusic by Claire Mayfield. Thanks for listening!", width / 2, height / 2);
}

function soundLoaded() {
  console.log("Sound successfully loaded!");
}

function keyPressed() {
  console.log("Key pressed:", key);
  if (key.toLowerCase() === 's') {
    playSwordSearch();
  }
}

function playSwordSearch() {
  if (SwordSearch.isLoaded()) {
    SwordSearch.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}

# Version 4:
**-I added messages that would appear in the console in order to inform me of the order that things were loaded. In the function preload, text saying "entering function preload" would appear in the console. In the function setup, text saying "entering function setup" would appear. I also added a let statement for SpaceRunner, the next audio file that I would be adding to this code:** 

let SwordSearch;

let SpaceRunner;

function preload() {
  console.log("entering function preload")
  soundFormats('wav', 'mp3');  
  SwordSearch = loadSound('SwordSearch.wav', soundLoaded);
}

function setup() {
  console.log("entering function setup")
  createCanvas(600, 400);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Welcome! Press the keys below to play different songs. \n\n\nS to play Sword Search.\nR to play Space Runner.\nE to play Exploration.\n\n\nMusic by Claire Mayfield. Thanks for listening!", width / 2, height / 2);
}

function soundLoaded() {
  console.log("Sound successfully loaded!");
}

function keyPressed() {
  console.log("Key pressed:", key);
  if (key.toLowerCase() === 's') {
    playSwordSearch();
  }
}

function playSwordSearch() {
  if (SwordSearch.isLoaded()) {
    SwordSearch.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}
 
# Version 5:
**-Next, in the "function preload", I added a "loadsound" for my "SpaceRunner" file, making it possible to be played by my code. Then, under my "keyPressed" function, I added another "if" statement that tells the program to play "SpaceRunner" if the 'r' key is pressed.**

**-Then, I added a "playSpaceRunner" function, which tells the console the sound is played, if the sound is loaded and played. Otherwise, it will tell the console that the sound isn't loaded yet. The result of this code is that it will play "SwordSwearch" when the key 's' is pressed, and it will play "SpaceRunner" when the key 'r' is pressed:** 

let SwordSearch;

let SpaceRunner;

function preload() {
  console.log("entering function preload")
  soundFormats('wav', 'mp3');  
  SwordSearch = loadSound('SwordSearch.wav', soundLoaded);
  SpaceRunner = loadSound('SpaceRunner.wav', soundLoaded)
}

function setup() {
  console.log("entering function setup")
  createCanvas(600, 400);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Welcome! Press the keys below to play different songs. \n\n\nS to play Sword Search.\nR to play Space Runner.\nE to play Exploration.\n\n\nMusic by Claire Mayfield. Thanks for listening!", width / 2, height / 2);
}

function soundLoaded() {
  console.log("Sound successfully loaded!");
}

function keyPressed() {
  console.log("Key pressed:", key);
  if (key.toLowerCase() === 's') {
    playSwordSearch();
  }
  if (key.toLowerCase() === 'r') {
    playSpaceRunner();
  }
}

function playSwordSearch() {
  if (SwordSearch.isLoaded()) {
    SwordSearch.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}

function playSpaceRunner() {
  if (SpaceRunner.isLoaded()) {
    SpaceRunner.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}

# Version 6:
Next, in the "function preload," I added a "loadSound" for my third and final audio file, named "Exploration.wav". I also added a "let Exploration" underneath "let SwordSearch" and "let SpaceRunner". Then, underneath the "keyPressed" function, I added a third "if" statement, telling the computer to play the "Exploration" file if the 'e' key is pressed. I also added "function playExploration", which will tell the console that the sound is played if it is loaded and played. Otherwise, it will tell the console that the sound is not loaded yet. The result of this code made it so that I could play any of these three different audio files by pressing their designated keys: 

let SwordSearch;

let SpaceRunner;

let Exploration;

function preload() {
  console.log("entering function preload")
  soundFormats('wav', 'mp3');  
  SwordSearch = loadSound('SwordSearch.wav', soundLoaded);
  SpaceRunner = loadSound('SpaceRunner.wav', soundLoaded);
  Exploration = loadSound('Exploration.wav', soundLoaded);
}

function setup() {
  console.log("entering function setup")
  createCanvas(600, 400);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Welcome! Press the keys below to play different songs. \n\n\nS to play Sword Search.\nR to play Space Runner.\nE to play Exploration.\n\n\nMusic by Claire Mayfield. Thanks for listening!", width / 2, height / 2);
}

function soundLoaded() {
  console.log("Sound successfully loaded!");
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
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}

function playSpaceRunner() {
  if (SpaceRunner.isLoaded()) {
    SpaceRunner.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}

function playExploration() {
  if (Exploration.isLoaded()) {
    Exploration.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}

# Version 7:
Next, I made some additional improvements. First, I changed the background color to blue using RGB color values. I got the code [here](https://p5js.org/reference/p5/background/), from the p5 website. I chose the color blue because it's my favorite color. 

Another improvement I made was to the console. I made the following functions more specific: "function playSwordSearch", "function playSpaceRunner", and "function playExploration". I made the text that is logged into the console to be specific to the audio files they are tracking. I changed this by simply editing the text within the quotes to match each function. 

For example, for "playSpaceRunner", the console will now say "SpaceRunner played"/"SpaceRunner not loaded yet" instead of the generic "Sound played"/"Sound not loaded yet". The same concept applies to the other two audio files.

The advantage to this is that I can see exactly which specific audio files are being loaded, rather than just knowing that there are audio files being loaded:

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

# Version 8 (Final Version):
For my final version, I added a black boarder around my canvas for aesthetic purposes. 

First, I found [code for drawing a rectangle](https://p5js.org/reference/p5/rect/) from the p5 website. I made the size of the rectangle match the size of the canvas. 

Then, I found [code for making a rectangle transparent](https://p5js.org/reference/p5/alpha/) from the p5 website. I set the fourth value to 0 in order to accomplish this.  

Then, I found [code for adjusting the rectangle stroke weight](https://p5js.org/reference/p5/strokeWeight/) from the p5 website. I experimented with different stroke weights until I decided that 20 was the best one, successfully creating a black boarder.  

Because I had established a color for the rectangle, I now needed to establish a color for the text. I discovered that the color of the text now matched the transparent color of the rectangle, making the text invisible. I set the color of the text to black using RGB values (0, 0, 0). 

In making my boarder, I had to make sure the order of all of these visual elements was correct, otherwise things would be covered up. I discovered that the correct order was canvas -> background color -> rectangle color -> rectangle stroke weight -> rectangle size -> text color -> text size -> text alignment -> and text. I experiemented with the order of these elements until it worked, and everything showed up correctly.

The final result allowed me to play three different audio files which were assigned to three different keys, with the text presented with a blue background and black boarder: 

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
  




