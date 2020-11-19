var x = 0; //Variable der gør at x er = 0
var speed = 10;

function setup() {
  createCanvas(windowWidth, windowHeight); //Laver et canvas der passer til "vinduet"
  }
 
function draw() {
  background(220);
  ellipse (x,windowHeight/2,100,100);//Laver en ellipse der starter halvejs ned af y-aksen ved hjælå af "windowHeight/2"
  
  x=x+speed; //Gør at x bliver plusset med 10 ved hjælp af vores anden variable "var speed =10"
  
  if (x>windowWidth){
    speed=-10 //Denne kode gør at hver gang vores cirkel rammer enden(højre side) af vinduet "windowWidth" bliver den sendt tilbage ved x værdien -10
  }
  
  else if (x<=0){
    speed=10 // Denne kode gør at hvis cirklens x-værdi er lig med eller mindre end 0 bliver den sendt til højre side igen med værdien +10
  }
  
  
}