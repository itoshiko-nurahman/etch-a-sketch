pickedColor = "";

//Buat function untuk mereset container
function cleanAll() {
  let blocks = document.querySelectorAll(".block");
  blocks.forEach(block => {
    block.style.backgroundColor = "white";
  });
}

//Buat button untuk trigger reset container
let reset = document.createElement("button");
reset.innerHTML = "Reset";
document.body.insertAdjacentElement("beforeend", reset);

reset.addEventListener("click", cleanAll);

//container to put the block
function createBlock(size = 16) {
  let container = document.querySelector(".container");
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Create the Grid
  for (let i = 0; i < (size * size); i++) {
    let block = document.createElement('div');
    block.classList.add("block");
    block.style.backgroundColor = `${pickedColor}`;
    container.insertAdjacentElement("beforeend", block);

    //change color when mouse over
    block.addEventListener("mouseover", function(){
      block.style.backgroundColor = colorPicker.value;
    })
  }
}

createBlock();


