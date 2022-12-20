
const rootApp = document.getElementById('app-root');

rootApp.innerHTML = `<p></p>`

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  ellipse(300, 200, 300);
}
