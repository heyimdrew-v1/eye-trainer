let x = 50;
let y = 50;
let speedX = 3;
let speedY = 3;
let angle = 0;
let amplitude = 5;
let verticalMotion = false; 

function setup() {
  let canvas = createCanvas(500, 200);
  canvas.parent('canvas-container-1');
  canvas.style('border', '2px solid white');

  
  let decreaseButton = createButton('Decrease Speed');
  decreaseButton.position(width / 2 - 240, 30);
  decreaseButton.mousePressed(decreaseSpeed);

  let increaseButton = createButton('Increase Speed');
  increaseButton.position(width / 2 - 80, 30);
  increaseButton.mousePressed(increaseSpeed);

  let toggleMotionButton = createButton('Toggle Motion');
  toggleMotionButton.position(width / 2 + 80, 30);
  toggleMotionButton.mousePressed(toggleMotion);

  let resetButton = createButton('Reset Motion');
  resetButton.position(width / 2 + 240, 30);
  resetButton.mousePressed(resetMotion);
}

function draw() {
  background(55);
  fill(255, 0, 255);
  stroke(255);
  strokeWeight(2);

  if (verticalMotion) {
  
  y = y + speedY;
  if (y > height - 5 || y < 5) {
  speedY = -speedY;
}
  ellipse(x, y, 20, 20);
  } else {

  let xOffset = amplitude * sin(angle);
  x = x + speedX;
  y = y + speedY;
  ellipse(x + xOffset, y, 20, 20);


  angle += 0.05;


  if (x > width - 5 || x < 5) {
  speedX = -speedX;

}

  if (y > height - 5 || y < 5) {
  speedY = -speedY;
    }
  }
}

function increaseSpeed() {
  speedX = speedX * 1.5; 
  speedY = speedY * 1.5;
}

function decreaseSpeed() {
  speedX = max(1, speedX * 0.7); 
  speedY = max(1, speedY * 0.7);
}

function toggleMotion() {
  verticalMotion = !verticalMotion;
}

function resetMotion() {
  
  verticalMotion = false;
  x = 50;
  y = 50;
  speedX = 3;
  speedY = 3;
  angle = 0;
}












