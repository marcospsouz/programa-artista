function setup() {
  createCanvas(600, 600);
  background("white");
}

function draw() {
  
  fill ("green");
  if(mouseIsPressed)
  stroke ("blue");
  rect(mouseX,mouseY,20,35);
}