let col = 1;
let row = 0;

//Function to create each cell
function createCell() {
    let cell = document.createElement("td");
    cell.classList.add("grid-cell");
    return cell;
}

//Function to add a row
function addRow() {
    let table = document.getElementById("table");
    let newRow = document.createElement("tr");
    newRow.classList.add("grid-row");
    table.appendChild(newRow);

    for (let i = 0; i < col; i++) {
        newRow.appendChild(createCell());
    }
    row++;
}

//function to add a column
function addCol() {
    let table = document.getElementById("table");
    let newCol = document.getElementsByClassName("grid-row");

    for (let i = 0; i < newCol.length; i++) {
        newCol[i].appendChild(createCell());
    }
    col++;
}

//function to remove a row
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

//function for color red
function turnRed(){
 document.getElementById("red").style.backgroundColor = 'red';
 
}

//function for color green
function turnGreen(){

}

//function for color blue
function turnBlue(){

}

//funciton for color purple
function turnPurple(){

}
