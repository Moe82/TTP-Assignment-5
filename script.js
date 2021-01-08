let col = 1;
let row = 0;

function createCell() {
    let cell = document.createElement("td");
    cell.classList.add("grid-cell");
    return cell;
}


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


function addCol() {
    let table = document.getElementById("table");
    let newCol = document.getElementsByClassName("grid-row");

    for (let i = 0; i < newCol.length; i++) {
        newCol[i].appendChild(createCell());
    }
    col++;
}

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
