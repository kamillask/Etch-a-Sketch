const container = document.querySelector(".gridContainer");
const defaultRows = 16;
let currentRows = defaultRows;
let rainbow = false;
let color = "black"

function randomColor(){
    return ((Math.random()*255)+1).toFixed(0) + ", " + ((Math.random()*255)+1).toFixed(0) + ", " + ((Math.random()*255)+1).toFixed(0);
}

//FILL SQUARE FUNCTION
function fillSquare(square){
    if(rainbow===false){
        square.style.backgroundColor = color;
    } else{
        square.style.backgroundColor = "rgb(" + randomColor() + ")";
    }
    
}

//RESET FUNCTION
function resetGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    createGrid(currentRows);
}

//RESET BUTTON
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    resetGrid();
    rainbow = false;
});

//CHANGE GRID SIZE
function changeGrid(size){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    createGrid(size);
}

//CHANGE GRID BUTTON
const changeGridButton = document.querySelector("#setGrid");
changeGridButton.addEventListener("click", () => {
    let size = prompt("What size grid? Max 100", "16");
    if(size===null || size==="" || Number(size)>100){
        return;
    } else {
        changeGrid(Number(size));
        currentRows = Number(size);
    }
    
});

//RAINBOW BUTTON
const rainbowButton = document.querySelector("#rainbow");
rainbowButton.addEventListener("click", () => {
    rainbow = true;
});


//CREATE GRID
function createGrid(row){
    for(let j=1; j<=row; j++){
        const columnContainer = document.createElement("div");
        columnContainer.setAttribute("class", "columnContainer");
        columnContainer.setAttribute("style", "display: flex;");
        for(let i = 1; i<=row; i++){
            const newDiv = document.createElement("div");
            newDiv.setAttribute("class", "square");

            newDiv.addEventListener("mouseenter", () => {
                fillSquare(newDiv);
            });

            columnContainer.appendChild(newDiv);
        }

        container.appendChild(columnContainer);
    }
    currentRows = row;
    
}

//DEFAULT GRID
createGrid(defaultRows);

