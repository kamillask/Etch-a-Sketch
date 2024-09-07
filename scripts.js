const container = document.querySelector(".gridContainer");
const defaultRows = 16;

function createGrid(row){
    for(let j=1; j<=row; j++){
        const columnContainer = document.createElement("div");
        columnContainer.setAttribute("style", "display: flex;");
        for(let i = 1; i<=row; i++){
            const newDiv = document.createElement("div");
            newDiv.setAttribute("class", "square");
            columnContainer.appendChild(newDiv);
        }

        container.appendChild(columnContainer);
    }
    
}

createGrid(defaultRows);

