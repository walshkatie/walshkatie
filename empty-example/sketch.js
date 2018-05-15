var brushColor; // stores the color of our paint brush
var brushSize; // stores the size of our pain brush
var backgroundColor; // stores the color our background

var setup = function() {
  brushColor = color(random(255), random(255), randomd(255); 
  backgroundColor = color(0, 0, 0); // yellow background
  brushSize = 10; // 
  background(backgroundColor); // clear to the background color
	createCanvas(windowWidth, windowHeight);
  //createCanvas(500,600); // 500 x 600 canvas
}

var mouseDragged = function() { // draw a line when the mouse dragged (at release) 
    stroke(brushColor);
    strokeWeight(brushSize);
    line(mouseX, mouseY, pmouseX, pmouseY)
}