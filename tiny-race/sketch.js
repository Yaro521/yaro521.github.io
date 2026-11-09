let racerXs = [30, 50, 30, 40];
let startY = 50;
let yStep = 60;
let finishX = 560;
let n = -1;
let racerColors = ["green", "blue", "yellow", "red"];
let maxCapacity = 8;
function keyPressed() {
  if (key === "a" || key === "A") {
    let totalX = 0;
    for (let i = 0; i < racerXs.length; i++) {
      totalX += racerXs[i];
    }
    let averageX = totalX / racerXs.length;
    if (racerXs.length < maxCapacity) {
      racerColors.push(color(random(0,255), random(0,255), random(0,255)))
      racerXs.push(averageX)
    }
    resizeCanvas(600, startY + yStep * racerXs.length)
  }



  if((key === "d" || key === "D") && racerXs.length >1){
    racerXs.pop()
    racerColors.pop()
    resizeCanvas(600, startY + yStep * racerXs.length)
  }
}

function setup() {
  createCanvas(600, startY + yStep * racerXs.length);
  // i did some research on the floor function and figured out that it just rounds the value to the nearest digit. I used this because random can return a decimal to my understanding which lead to the euals statement not working with the fast racer
  // i don't use let since i just want to assign a value rather then creating a variable which would only exist in setup
  fastRacer = floor(random(0, racerXs.length));
}

function draw() {
  background(240);
  line(finishX, 0, finishX, height);
  for (let i = 0; i < racerXs.length; i++) {
    let speed = random(1, 3);
    let y = startY + yStep * i;

    if (i === fastRacer) {
      speed *= 2;
    }

    if (racerXs[i] < finishX) {
      racerXs[i] += speed;
    }
    fill(racerColors[i]);
    circle(racerXs[i], y, 24);
  }
}
