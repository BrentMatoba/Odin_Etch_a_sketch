
//add 16 divs can use for loop.
//in loop add grid square class

const container = document.createElement('div');
container.classList.add("container");
document.body.appendChild(container);


for(let i = 0; i < 16; i++){
    const square = document.createElement('div');
    //I think I can add the vertical divs here.
    square.classList.add("square")
    container.appendChild(square);
}
