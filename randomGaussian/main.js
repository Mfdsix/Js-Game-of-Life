let items;
let frame;
let winner;
let gameStart = false;

const size = 20;
const dimension = {
    width: 1000,
    height: 200,
}

function setup(){
    frame = 0;
    items = initial();
}

function draw(){
    clear();
    field();

    items.forEach((item) => {
        fill(item.bg);
        rect(item.x, item.y, size);
    });

    if(gameStart){
        frame++;
        if(frame == 20){
            move();
            frame = 0;
        }
    }
}

function keyPressed(){ 
    if(keyCode == 32){
        gameStart = true;
    }
}

function field(){
    createCanvas(dimension.width, dimension.height);
    stroke(0);
    rect(0,0,dimension.width,dimension.height);
}

function initial(){
    gameStart = false;
    const colors = [
        'red',
        'green',
        'yellow',
        'blue',
    ];
    let arr = [];
    for(var i=0; i < 4; i++){
        arr.push({
            x: 1,
            y: i * size + ((i+1) * size),
            bg: colors[i]
        });
    }

    return arr;
}

function move(){
    if(!winner){
        const item = floor(random(items.length));
        const movement = randomGaussian(10, 15);
        items[item].x += movement;
    
        if(items[item].x >= width - size){
            winner = items[item].bg;
            alert("The winner is: " + winner);
            initial();
        }
    }
}