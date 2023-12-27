


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  stroke(255, 204, 0); 
  noFill();
  // drawCircle(250, 250, 325);
  // drawTriangle(50, 100, 100, 50, 150, 100);
  drawRect(490, 100, 100, 100);
  noLoop();
}

function drawTriangle(q, w, e, r, t, y) {
  triangle(q, w, e, r, t, y);
  if (r < height || e < width) {
    // drawTriangle(q * 0.8, w * 1, e * 1, r * 0.8, t * 1.2, y * 1.2)
    drawTriangle(q * 1.25, w * 1.1, e * 1.1, r * 1.25, t * 0.75, y * 0.75)

    // drawTriangle(q * 0.8, w * 0.8, e * 0.8 , r * 0.8, t * 0.8, y * 0.8)

  }
}

function drawCircle(x, y, d) {
  ellipse(x, y, d);
  if (d > 2) {
    drawCircle(x + d * 0.5, y, d * 0.5);
    // drawCircle(x - d * 0.5, y, d * 0.5);
    drawCircle(x, y + d * 0.5, d * 0.5);
  }
}

function drawRect(x, y, q, w) {
  rect(x, y, q, w);
  if (x < width || y < height) {
    drawRect(x * 0.87, y * 0.82, q, w)
  }
}
