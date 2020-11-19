function setup() {
    createCanvas(800, 800); // Canvas størrelse 
  }
  
  function draw()
  {
    
    background(220); //Baggrundsfarven
    let x =mouseX //Varible der får hvad enten der bliver kaldt "x" til at følge musens x værdi
    let y =mouseY //Varible der får hvad enten der bliver kaldt "y" til at følge musens y værdi
    
    //stickman
    circle (400,100,50); //Hovede
    line (400,125,400,300); //Kroppen
    line (400,125,x,y); //Venstre arm og tilføjet x og y variable der får armen til at følge musens x og y værdi
    line (400,125,450,220); //Højre arm
    line (400,300,350,370); //Venstre ben
    line (400,300,450,370); //Højre ben
    
    //stickmans ansigt 
    ellipse (390,95,7,7); //Venstre øje
    ellipse (410,95,7,7); //Højre øje
    arc(400, 110, 10, 10, 0, PI + QUARTER_PI, CHORD);
    
  }