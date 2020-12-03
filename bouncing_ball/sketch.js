let x = 320;
let y = 180;
let xspeed = 10;
let yspeed = 15;

let r = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
}

function draw() {
  background("pink")

  circle(x,y,50)
  x += xspeed
  y += yspeed
  if (x > windowWidth - r || x < r) {
    xspeed = -xspeed
  }
  if (y > windowHeight - r || y < r ) {
    yspeed = -yspeed
  } 
}