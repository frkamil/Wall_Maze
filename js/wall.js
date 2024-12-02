class Wall {
  constructor(initX, initY, initW, initH) {
    this.x = initX;
    this.y = initY;
    this.w = initW;
    this.h = initH;
    this.color = "grey";
  }

  //   Method
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  collide() {
    if (rectCollide(this, player1)) {
      gameOver();
    }

    for (let i = 0; i < bulletArray.length; i++) {
      if (rectCollide(this, bulletArray[i])) {
        bulletArray.splice(bulletArray[i], 1);
      }
    }
  }
}

function moveWalls() {
  //Wall 1
  movingWall1.y += movingWall1.direct;
  if (movingWall1.y >= cnv.height - movingWall1.h) {
    movingWall1.direct = -2;
  } else if (movingWall1.y <= 340) {
    movingWall1.direct = 2;
  }

  if (rectCollide(movingWall1, player1)) {
    gameOver();
  }

  //Wall 2
  movingWall2.y += movingWall2.direct;
  if (movingWall2.y >= cnv.height - movingWall2.h) {
    movingWall2.direct = -2;
  } else if (movingWall2.y <= 340) {
    movingWall2.direct = 2;
  }

  if (rectCollide(movingWall2, player1)) {
    gameOver();
  }
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
