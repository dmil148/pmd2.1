let soundFX = new Tone.Players({
  bonk: "assets/bonk.mp3.mp3",
  pipe: "assets/pipe.mp3.wav",
  stinky: "assets/stinky.mp3.mp3",
  vegemite: "assets/vegemite.mp3.wav"
}).toDestination();

let bonkBut, pipeBut, stinkyBut, veggieBut, distSlider, delaySlider, fbSlider;

let distAmt = new Tone.Distortion (0); 

soundFX.connect(distAmt);
distAmt.toDestination();

function setup() {
  createCanvas(400, 400);

  bonkBut = createButton("Bonk")
  bonkBut.position (85, 100);
  bonkBut.mousePressed (() =>soundFX.player ('bonk').start());

  pipeBut = createButton("Pipe")
  pipeBut.position (85, 125);
  pipeBut.mousePressed (() =>soundFX.player ('pipe').start());

  stinkyBut = createButton("Stinky")
  stinkyBut.position(85, 150);
  stinkyBut.mousePressed (() =>soundFX.player('stinky').start());

  veggieBut = createButton("Vegemite");
  veggieBut.position(85,175);
  veggieBut.mousePressed (() =>soundFX.player('vegemite').start());

  distSlider = createSlider (0, 0.9, 0, 0.05);
  distSlider.position (120, 300);
  distSlider.input (() => distAmt.distortion = distSlider.value());
}

function draw() {
  background(220);
  text("Press button to make a sound", 10, 10);
  text("Slider adjusts playback distortion", 10, 20);
}
