// Click and drag the mouse to view the scene from different angles.

let angle = 0;
let torusSize = 30;
let torusDelta = 1.5;
let n = 4;
let torusStart = 70;
let torusStepz = 5;
let torusStepx = 18;

let c1, c2;
let speed = 600;
function setup() {
  createCanvas(400, 400, WEBGL);
  c1 = color(22, 179, 227);
  c2 = color("red");
}

function draw() {
  let colorCounter = (sin(((frameCount % speed) / speed) * TAU) + 1) / 2;

  background(200);

  orbitControl();
  angle += 0.03;
  angle %= TAU;
  if (keyIsDown(UP_ARROW) || keyIsDown(SHIFT)) {
    angle += 0.02;
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(CONTROL)) {
    angle = angle - 0.02;
  }

  push();
  if (key === "z") {
    for (let i = 0; i < n; i++) {
      fill("black");
      rotate(5);
      torus(torusStart + torusStepz * i, 20);
    }
  }
  pop();
  push();
  if (key === "x") {
    for (let i = 0; i < 3; i++) {
      fill("lightgreen");
      rotate(5);
      torus(torusStart + torusStepx * i, 20);
    }
  }
  pop();

  push();
  fill(lerpColor(c1, c2, colorCounter));
  rotateX(angle * 1.5);
  torus(torusSize, 30, 20, 7);

  pop();
  push();
  fill(lerpColor(c2, c1, colorCounter));
  rotateY(angle * 1.5);
  torus(torusSize, 30, 20, 7);
  pop();

  push();
  fill("lightgray");
  rotateY(angle);
  sphere(50, 24, 2);
  pop();

  fill("yellow");
  for (let i = 0; i < n; i++) {
    push();
    rotate(angle);
    rotate((i * TAU) / n);
    
    translate(0, 150);
    rotate((-i * TAU) / n);
    sphere(30);
    pop();
  }
  if (keyIsDown("p")) {
    for (let i = 0; i < n; i++) {
      push();
      rotateX(angle * 1.5);
      rotate((i * TAU) / n);
      translate(0, 150);
      rotate((-i * TAU) / n);
      sphere(30);
      pop();
    }
  }
  if (keyIsDown("o")) {
    for (let i = 0; i < n; i++) {
      push();
      rotateY(angle * 1.5);
      rotate((i * TAU) / n);
      translate(0, 150);
      rotate((-i * TAU) / n);
      sphere(30);
      pop();
    }
  }

  torusSize = torusSize + torusDelta;
  if (torusSize > 275) {
    torusDelta = -1.5;
  }

  if (torusSize < 0) {
    torusDelta = 1.5;
  }
}

function keyPressed() {
  if ("0123456789".includes(key)) {
    n = Number(key);
  }
}
console.log("Instructions")
console.log("1. You can click the number keys to change the amount of rotating spheres by clicking the number keys (1,2,3,4,5,6,7,8,9,0)")

console.log("2. You can change the rotation speed by the up and down arrow keys")

console.log("3. Clicking z,x,o, and p adds new figures ")
