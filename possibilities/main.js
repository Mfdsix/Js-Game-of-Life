let grid;
let position;
let frames = 0;
const size = 300;
const resolution = 100;

function setup(){
    position = 'C';
}

function draw(){
    createCanvas(size, size);
    background(250);
    drawItems();

    frames++;
    if(frames == 30){
        countPossibilities();
    }else if(frames >= 60 ){
        frames = 0;
        position = 'C';
    }
}

function drawItems(){
    const items = [
        {
            x : (size / 2) - (resolution / 2),
            y: 0,
            annotation: "T"
        },
        {
            x : 0,
            y: resolution,
            annotation: "L"
        },
        {
            x : resolution,
            y: resolution,
            annotation: "C"
        },
        {
            x : resolution * 2,
            y: resolution,
            annotation: "R"
        },
        {
            x : (size/2) - (resolution/2),
            y: resolution * 2,
            annotation: "B"
        },
    ];

    items.forEach((v) => {
        if(position == v.annotation){
            fill(55);
        }else{
            fill(255);
            stroke(0);
        }

        rect(v.x, v.y, resolution, resolution);
    });
}

function countPossibilities(){
    const poss = [
        'T',
        'L',
        'R',
        'B',
    ];
    const rand = floor(random(4));
    position = poss[rand];
}