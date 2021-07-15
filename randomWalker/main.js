const width = 500;
const height = 500;
const resolution = 2;
let x;
let y;

function setup(){
    init();
}

function draw(){
    fill(200);
    rect(x,y,10,10);
    move();
}

function mousePressed(){
    clear();
    init();
}

function init(){
    createCanvas(width, height);
    stroke(0);
    rect(0, 0, width, height);
    x = width / 2 - (resolution / 2);
    y = height / 2 - (resolution / 2);
}

function move(){
    let additionalX = 0;
    let additionalY = 0;
    const posibilityMoves = [2, -2];

    if(x <= 0){
        additionalX = posibilityMoves[0];
    }else if(x >= width - resolution){
        additionalX = posibilityMoves[1]
    }else{
        additionalX = posibilityMoves[floor(random(2))];
    }

    if(y <= 0){
        additionalY = posibilityMoves[0];
    }else if(x >= width - resolution){
        additionalY = posibilityMoves[1]
    }else{
        additionalY = posibilityMoves[floor(random(2))];
    }

    x += additionalX;
    y += additionalY;
}