var x = 0; //Variable der gør at x er = 0
let xspeed = 7;
let yspeed = 10;
let r = 25;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  //Laver et canvas der passer til "vinduet"
  }
 
function draw() {
  background(220);
  ellipse (x,30,40,40); 
  x += xspeed
  y += yspeed
   if (x > windowWidth - r || x < r) {
    xspeed = -xspeed
  }
  if (y > windowHeight - r || y < r ) {
    yspeed = -yspeed
  } 

  

  
  
}