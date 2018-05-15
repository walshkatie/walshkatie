var canvas;

function windowResized(){
  resizeCanvas
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  background(247,247,247)
}

function keyPressed(){
  clear();
}

function draw() {
  stroke(249, 202, 44);
   {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
