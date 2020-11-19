function setup() {
    createCanvas(windowWidth, windowHeight); //laver et canvas der skifter størrelse i forhold til hvor stor "vinduet" er 
  }
  
  function draw() {
    background(220);
    
    //Linjer der deler skærmen op i fire kvadrater
    line(windowWidth/2,0,windowWidth/2,windowHeight)//Kode der laver en linje lodret ned af canvasset.
    line(0,windowHeight/2,windowWidth, windowHeight/2)//Kode der laver en linje vandret hen af canvasset.
  
    //kode der får cirkel til at skifte i forhold til hvilken kvadrat den er inde i 
    
    if(mouseX > windowWidth/2 && mouseY < windowHeight/2) cirkel = color("red"); //Øverste højre kvadrat bliver cirkel gjort rød
     
     if(mouseX < windowWidth/2 && mouseY < windowHeight/2) cirkel = color("white"); //Øvereste venstre kvadrat bliver cirkel gjort hvid 
    
     if(mouseX < windowWidth/2 && mouseY > windowHeight/2) cirkel = color("red"); //Nederste venstre kvadarat bliver cirkel gjort rød igen
    
    if(mouseX > windowWidth/2 && mouseY > windowHeight/2) cirkel = color("white"); //Nederste højre kvadrat bliver cirkel gjort hvid igen
    
   
   fill(cirkel)
    ellipse(mouseX,mouseY,50);
    
  }