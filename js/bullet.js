class Bullet {
  constructor() {
    this.x = 750;
    this.y = 295;
    this.w = 10;
    this.h = 5;
  }

  //   Method
  collide() {
    if (rectCollide(this, player1)) {
      gameOver();
    } else {
      this.color = "rgb(73, 73, 155)";
    }
  }

  shoot() {
    this.x -= 3;
    ctx.fillStyle = "rgb(73, 73, 155)";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}

//Shoot Bullets
function bullets() {
  //Draw shooter
  ctx.beginPath();
  ctx.arc(780, 295, 15, 0, 2 * Math.PI);
  ctx.fillStyle = "rgb(73, 73, 155)";
  ctx.fill();
  //Draw bullets
  for (let i = 0; i < bulletArray.length; i++) {
    bulletArray[i].shoot();
  }
}
