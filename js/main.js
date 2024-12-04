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
let player1;
let movingWall1;
let movingWall2;
let wallArray = [];

reset();

//Shoot bullets
setInterval(ShootBullets, 900);

function ShootBullets() {
  if (bulletArray.length <= 2) {
    bulletArray.push(new Bullet());
  }
}

// Draw Function
window.addEventListener("load", draw);

//Check State
function draw() {
  if (state === "gameon") {
    runGame();
  } else if (state === "gameover") {
    drawGameOver();
  } else if (state === "win") {
    drawGameWin();
  }

  // Request Animation Frame
  requestAnimationFrame(draw);
}
