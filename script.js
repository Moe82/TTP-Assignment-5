//function to reset all cells
let col = 0;
let row = 0;
let coloring = false;
let currentColor = "Blue";

addRow();
addCol();

//Function to create each cell
function createBlock() {
    let cell = document.createElement("td");
    cell.classList.add("grid-cell");
    cell.classList.add("empty");
    cell.addEventListener("click", event =>{
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("empty");
    });
    cell.addEventListener("mousedown", event =>{
        coloring = true;
    });
    cell.addEventListener("mousemove", event =>{
        if (coloring){
            cell.style.backgroundColor = currentColor;
            cell.classList.remove("empty");
        }
    });
    cell.addEventListener("mouseup", event => {
        if (coloring){      
            coloring = false;
        }
    });
return cell;
}

//Function to add a row
function addRow() {
    let table = document.getElementById("table");
    let newRow = document.createElement("tr");
    newRow.classList.add("grid-row");
    table.appendChild(newRow);
    for (let i = 0; i < col; i++) {
        newRow.appendChild(createBlock());
    }
    row++;
}

//function to add a column
function addCol() {
    let table = document.getElementById("table");
    let newCol = document.getElementsByClassName("grid-row");
    for (let i = 0; i < newCol.length; i++) {
        newCol[i].appendChild(createBlock());
    }
    col++;
}

//Function to remove a row
function removeRow(){
 if (row  === 1){
    for (let i = rows[0].cells.length-1; i >= 0; i--){
	   removeCol();
    }
 }
 else {
    row = row - 1;
    let table = document.getElementById("table");
    let last = table.rows.length-1;
    table.deleteRow(last);
 }
}

//function to remove a column
function removeCol(){
 if (col === 1){
    for (let i = row.length-1; i >= 0; i--){
	removeRow();
    }
 }
 else {
 col = col - 1;
 let table = document.getElementById("table");
 let last = table.rows[0].cells.length-1;
     for(let i = 0; i < table.rows.length; i++){
        table.rows[i].deleteCell(last);
     }
 }
}

//function to set the current color based on menu selection
function setColor(color){
    currentColor = color;
}

//function to change the color of a cell
function changeColor(cell){
    cell.style.backgroundColor = currentColor;
    cell.classList.remove("empty");
}

// function to return an array of cell elements
function getCells(){
    let table = document.getElementById("table");
    let rows = table.getElementsByClassName("grid-row");
    let cellArray = []
    for (x = 0; x < rows.length; ++x) {
        let cells = rows[x].getElementsByClassName("grid-cell")
        for (y = 0; y < cells.length; ++y) {
            cellArray.push(cells[y]);
        }
    }
    return cellArray;
}

//function to fill all cells with selected color
function fillAll(){
    let cells = getCells();
    for (x = 0; x < cells.length; x++) {
        changeColor(cells[x]);
    }
}

//function to fill all uncolored cells with selected color. 
function fillUncolored(){
    let cells = getCells();
    for (x = 0; x < cells.length; x++) {
        if (cells[x].classList.contains("empty")){
            changeColor(cells[x]);
        }
    }
}

//function to reset all cells
function clearCells(){
    cells = getCells();
    for (x = 0; x < cells.length; x++) {
        cells[x].style.backgroundColor = "white";
        cells[x].classList.add("empty");
    }
}