let col = 0;
let row = 0;
let coloring = false;
let currentColor = "white";

//Function to create each cell
function createBlock() {
    let block = document.createElement("td");
    block.classList.add("grid-cell");
    block.classList.add("empty");
    block.addEventListener("click", event =>{
     if (coloring){
           block.style.backgroundColor = currentColor;
           block.classList.remove("empty");
        }
    });
    block.addEventListener("mousedown", event =>{
     coloring = true;
    });
    block.addEventListener("mousemove", event =>{
	if (coloring){
	   block.style.backgroundColor = currentColor;
 	   block.classList.remove("empty");
	}
    });
    block.addEventListener("mouseup", event => {
       if (coloring){      
	   coloring = false;
       }
    });

    return block;
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

//function for color red
function turnRed(){
 currentColor = "red";
}

//function for color green
function turnGreen(){ 
 currentColor = "green";
}

//function for color blue
function turnBlue(){
 currentColor = "blue";
}

//funciton for color purple
function turnPurple(){
 currentColor = "purple";
}

//function for setting uncolored block to color
//function fillUncolored(){
//for (let i = 0; i < row.length; i++){
    //for (let j = 0; j < row[0].length; j++){
  //    if (row[i][j].classList.contains("empty"))
    	
//	color = currentColor;
    //}
 //}
//}
