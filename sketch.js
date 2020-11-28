//Moving Ball

var radius = 40; 
var x = 40; 
var y = 60;
var speed = 5;
var directionX = 1;
var directionY = 1;
function setup() {
  createCanvas(600, 600); 
  ellipseMode(RADIUS);
}


function draw() {
  
background(0);
  

  

if (mouseIsPressed) {
x = mouseX;
y = mouseY;
}  
else{  
x = x + speed * directionX;
y = y + speed * directionY;
print(x,y)
  
  
if ( (x > width-radius) || (x < radius) ) {

directionX = -1 * directionX; // Flip direction 
  
}
if ( (y > height-radius) || (y < radius) ) {

directionY = -1 * directionY; // Flip direction 
  
} 
}

circle(x,y,radius)

  
}

