let grid;
let counter = 0;
const resolution = 20;
const cols = 60;
const rows = 25;

function setup(){
    populate();
    createCanvas(resolution * cols, resolution * rows);
    background(255);
}

function populate(){
    let arr = new Array(cols);
    
    for(var i=0; i < cols; i++){
        arr[i] = new Array(rows);
        for(var j=0; j < rows; j++){
            arr[i][j] = floor(random(2));
        }   
    }
    
    grid = arr;
}

function draw(){
    for(var i=0; i < grid.length; i++){
        for(var j=0; j < grid[i].length; j++){
            x = resolution * i;
            y = resolution * j;
            fill(255);
            if(grid[i][j] == 1){
                fill(0);
            }
            rect(x, y, resolution, resolution);
        }
    }

    counter++;
    if(counter == 25){
        nextGeneration();
        counter = 0;
    }
}

function nextGeneration(){
    let newArr = new Array(grid.length);

    for(var i=0; i < grid.length; i++){
        newArr[i] = new Array(grid[i].length);

        for(var j=0; j < grid[i].length; j++){
            let alifeNeighbors = 0;
            let alife = grid[i][j];
            newArr[i][j] = alife;
            
            alifeNeighbors += grid[i-1]?.[j]
            + grid[i+1]?.[j]
            + grid[i]?.[j+1]
            + grid[i]?.[j-1]
            + grid[i-1]?.[j-1]
            + grid[i-1]?.[j+1]
            + grid[i+1]?.[j-1]
            + grid[i+1]?.[j+1];

            if(alife == 0  && alifeNeighbors == 3){
                newArr[i][j] = 1;
            }
            if(alife == 1  && (alifeNeighbors < 2 || alifeNeighbors > 3)){ 
                newArr[i][j] = 0;
            }
        }
    }

    grid = newArr;
}