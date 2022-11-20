let grid_btn = document.querySelector(".grid_btn");
grid_btn.addEventListener('click',promptUser);

let numColumns = 16;
let numRows = 16;

//mouse
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//container
let grid_container = document.querySelector(".grid_container");

function generateGrid(){
    grid_container.style.cssText += 'grid-template-columns: repeat(' +numColumns+",1fr)";

    for(let i = 0;i<numColumns*numRows;i++){
        let grid_ele = document.createElement('div');
        grid_ele.classList.add('grid_ele');
        // grid_ele.addEventListener("mouseover", () => {grid_ele.classList.add("grid_ele_hover");});
        grid_ele.addEventListener("mouseover", mouseInteraction);
        grid_ele.addEventListener("transitionend", removeTransition);
        grid_ele.addEventListener("mousedown",()=>{grid_ele.classList.add("grid_ele_click");})
        grid_container.appendChild(grid_ele);
    }
}

function mouseInteraction(){
    if(mouseDown){
        this.classList.add("grid_ele_click");
    }else{
        this.classList.add("grid_ele_hover");
    }
    
}

function removeTransition(e){
    console.log(this.mouseIsOver);
    if(e.propertyName !== 'opacity') return; //skip it if its not a transform
    this.classList.remove('grid_ele_hover');
    console.log(e.propertyName);

}
function clearGrid(){
    while(grid_container.firstChild){
        grid_container.removeChild(grid_container.lastChild);
    }
}
function promptUser(){
    let qn = prompt("How many rows and columns do you want?");
    numColumns = +qn;
    numRows = +qn;
    clearGrid();
    generateGrid();
}

// const gridEle = document.querySelectorAll('.grid_ele');
// gridEle.forEach(el => el.addEventListener('transitionend', removeTransition));

