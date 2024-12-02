// player1copter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;
let starImg = document.createElement("img");
starImg.src = "img/star.jpg";

// Global Variables (Once)

let mouseIsPressed = false;

//Global Variables (Reset)
let state;
let currenttime = 0;
let besttime = 0;
let player1;
let movingWall1;
let movingWall2;
let wallArray = [];

reset();
setTimeout(ShootBullets, 0);

function ShootBullets() {
  setTimeout(ShootBullets, 1000);
  bulletArray.push(new Bullet());
}

// Draw Function
window.addEventListener("load", draw);

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "gameon") {
    runGame();
  } else if (state === "gameover") {
    drawGameOver();
  } else if (state === "win") {
    drawGameWin();
  }

  // Request Animation Frame
  requestAnimationFrame(draw);
}

//Event Stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);

function mousedownHandler() {
  mouseIsPressed = true;
  //Start Game on Mousedown
  if (state === "start") {
    state = "gameon";
  }
}

function mouseupHandler() {
  mouseIsPressed = false;
}
