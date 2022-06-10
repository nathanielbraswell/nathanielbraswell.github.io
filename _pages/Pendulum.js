let angle;
let bob;
let origin; 
let AngularVel=0;
let AngularAcc=0;
let gravity;
let adjustable;
let period;
let Test;
let input;
let force;
let k;
let lm;
let lpx;


function setup() {

    
    createCanvas(725,585);

    origin = createVector(362.5, 0);
    angle=PI/4;
    bob=createVector();
    lpx=250;
    lm=lpx*0.066145825
    gravity=.16;
    g=gravity;

}

function draw() {
    
    k=(-g/lm);
    force = k * sin(angle);
    AngularAcc = (1 * force)/lm;
    period=(2*PI)*Math.sqrt(lm/g);
    AngularVel += AngularAcc;
    angle += AngularVel;

    AngularAcc = (1 * force)/lm;

    bob.x=lpx*sin(angle) + origin.x;
    bob.y=lpx*cos(angle) + origin.y;

    background(50);
    stroke(255);
    strokeWeight(8);
    fill(127);
    line(origin.x, origin.y, bob.x, bob.y);
    circle (bob.x, bob.y, 64);

}