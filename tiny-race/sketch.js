let racerXs = [30, 50, 30, 40];
let startY = 50;
let yStep = 60;
let finishX = 560;

function setup() {
  createCanvas(600, startY + yStep * racerXs.length);
  // i did some research on the floor function and figured out that it just rounds the value to the nearest digit. I used this because random can return a decimal to my understanding which lead to the euals statement not working with the fast racer
  // i don't use let since i just want to assign a value rather then creating a variable which would only exist in setup
  fastRacer = floor(random(0,racerXs.length))
}

function draw() {
  background(240);
  line(finishX, 0, finishX, height);
  for (let i = 0; i < racerXs.length; i++) {
    let speed = random(1, 3)
    let y = startY + yStep * i;

    if(i === fastRacer){
      speed *= 2
    }

    if (racerXs[i] < finishX) {
      racerXs[i] += speed ;
    }
    circle(racerXs[i], y, 24);
  }
  
}
