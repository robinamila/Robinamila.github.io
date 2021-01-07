//setrotation



var ship;
var asteroid = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 
  ship = new ship();
  
  
}
 

function draw(){
  background(0) // Laver vores baggrund sort
  ship.render(); //Tegner vores rumskib inde på canvasset
  ship.turn();
  ship.update();
  ship.edges();
  
  for (var i = 0; i < asteroid.length; i++) {
    asteroid [i].render();
  }
}

function keyReleased(){
      ship.setRotation(0.0);
// Funktionen gør at når jeg giver slip for tasten bliver den stående
      ship.boosting(false);
}

function keyPressed(){ //Funktion der gør at rumskibet drejer i forhold til hvilken knap der bliver trykket på
  if (keyCode == RIGHT_ARROW){
    ship.setRotation(0.1);
  } 
 else if (keyCode == LEFT_ARROW){
    ship.setRotation(-0.1);
  }
  else if (keyCode == UP_ARROW) {
    ship.boosting(true);
    
  }
  
}

function ship(){
  this.pos = createVector(width/2,height/2);
  this.r =20;
  this.retning = 0; //Bestemmer retningen af rumskibet
  this.rotation = 0;
  this.vel = createVector(0,0);
  this.isBoosting = false;
  
  this.boosting = function(b){
    this.isBoosting = b;
  }
  
  this.update = function(){
    if (this.isBoosting){
    this.boost ();
    }
    
    this.pos.add(this.vel);
    this.vel.mult(0.99);
  }
  
  this.boost = function(){
    var force = p5.Vector.fromAngle(this.retning);
    force.mult(0.1);
    this.vel.add(force);
  }
  
  
this.render = function(){
 
  translate(this.pos.x, this.pos.y) // Får vores rumskib til at sidde i midten af skærmen
  rotate(this.retning + PI/2)
  noFill();
  stroke(225); // giver vores rumskib en hvid outline 
  triangle(-this.r,this.r,this.r,this.r,0,-this.r); // Selve rumskibet
  }
  
  this.edges = function(){ // Funktionen der gør at skibet bliver inde på canvasset
    if (this.pos.x > width + this.r){
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r){
      this.pos.x = width + this.r;
    }
     if (this.pos.y > height + this.r){
      this.pos.y = -this.r;
    }
    else if (this.pos.y < -this.r){
      this.pos.y = height + this.r;
    }
  }
  
  this.setRotation = function (a){
    this.rotation = a;
  }
  
  this.turn = function(){
    this.retning += this.rotation
  }
  
}