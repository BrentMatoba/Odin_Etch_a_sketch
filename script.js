
//add container div for entire page
const container = document.createElement('div');
container.classList.add("container");
document.body.appendChild(container);





//creates top row of grid
for(let i = 0; i < 16; i++){
    const row = document.createElement('div');
    //adds columns
    for(let j = 0; j < 16; j++){
        const square = document.createElement('div');
        square.classList.add("row", "square");
        square.addEventListener("mouseover", onMouseHover)
        row.appendChild(square);
    }
    row.classList.add("row") //appends everything together
    container.appendChild(row);
}

//add hover event listener
function onMouseHover(){
    //remember this keyword, refers to the div that triggered the event.
    //change square color upon mouse hover
    this.classList.add("activated");
}

//button control
const buttonContainer = document.getElementById("buttonContainerDiv");
buttonContainer.classList.add("buttonContainer");

const button = document.getElementById("button");
button.classList.add("buttonFormat");

//take input, then feed input into newGrid
button.addEventListener("click", getGridAmount);





//generates new Etch-a-Sketch grid based on int input
function newGrid(rows){
    //removes previous grid
    container.replaceChildren();

    //makes new grid
    for(let i = 0; i < rows; i++){
        const row = document.createElement('div');
        //adds columns
        for(let j = 0; j < rows; j++){
            const square = document.createElement('div');
            square.classList.add("row", "square");
            square.addEventListener("mouseover", onMouseHover)
            row.appendChild(square);
        }
        row.classList.add("row")
        container.appendChild(row);
    }
}

function getGridAmount(){
    //prompts user for grid size
    let number = prompt("How many rows would you like in your Etch-a-Sketch. 100 rows or less! Numbers only please!");
    try{number = Number(number)}
    catch{}
    if(Number.isInteger(number) && number <= 100){
        //creates new grid
        newGrid(number);
    }
    else if(Number.isInteger(number) && number > 100 ){
        alert("That number is too high! Please try again with a lower number");
    }
    else{
        alert("Not a number, please try again!");
    }
}












