function keyPressed() {
  if ("0123456789".includes(key)) {
    let n = Number(key);
    console.log(n);
    addBalloonsKeys(n);
  }
}

function addBalloonsKeys(n) {
  for (let i = 0; i < n; i++) {
    colors.push({
      x: random() * width,
      y: random() * height,
      paint: color(random() * 255, random() * 255, random() * 255),
      d: random() * 50,
    });
  }
}

let colors = [
  { x: 200, y: 50, d: 32, paint: "tomato" },
  { x: 100, y: 100, d: 40, paint: "skyblue" },
  { x: 350, y: 150, d: 50, paint: "green" },
];

function updateBalloon(balloon) {
  balloon.y = balloon.y - balloon.d / 100;
}
function drawBalloon(balloon) {
  fill(balloon.paint);
  circle(balloon.x, balloon.y, balloon.d);
  fill("black");
  line(
    balloon.x,
    balloon.y + (balloon.d / 2 + 3),
    balloon.x + 1,
    balloon.y + (balloon.d / 2 + 10) + balloon.d / 0.64
  );
}

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background("white");
  addBalloon();
}

function mousePressed() {
  colors.push({
    x: random() * width,
    y: random() * height,
    paint: color(random() * 255, random() * 255, random() * 255),
    d: random() * 50,
  });
}

function addBalloon() {
  for (let i = 0; i < colors.length; i++) {
    updateBalloon(colors[i]);
    drawBalloon(colors[i]);
  }
}
