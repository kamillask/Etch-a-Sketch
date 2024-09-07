const container = document.querySelector(".gridContainer");
const defaultRows = 16;
let currentRows = defaultRows;

//FILL SQUARE FUNCTION
function fillSquare(square){
    square.setAttribute("style", "background: red;");
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

