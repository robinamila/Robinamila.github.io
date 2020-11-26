function setup() {
createCanvas(windowWidth, windowHeight)
}

function draw() {
    background(150);

    circle (50, 50, 50)
    circle (width -50, 50, 50)
    circle (mouseX, mouseY, 50)

    let n = map(mouseX, 0, width, 1, 100, true)
    n = round(n)

    for(let i= 0; i <= n; i++){
        x1 = map(i,0,n,50, mouseX, 100, true);
        y1 = map(i,0,n, 50, mouseY,true);
        x2 = map(i,0,n, mouseX,width -50, true);
        y2 = map(i,0,n,mouseY,50,true);

        line(x1,y1,x2,y2);
        }
    }
