
//add 16 divs can use for loop.
//in loop add grid square class

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
        row.appendChild(square);
    }
    row.classList.add("row") //appends everything together
    container.appendChild(row);
}



//add hover event listener
//make class to add upon hover and remove upon non-hover
//add button