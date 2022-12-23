baseColor = "grey";

//container to put the block
function createBlock(size = 16) {
  let container = document.querySelector(".container");
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Create the Grid
  for (let i = 0; i < (size * size); i++) {
    let block = document.createElement('div');
    block.classList.add("block");
    block.style.backgroundColor = `${baseColor}`;
    container.insertAdjacentElement("beforeend", block);

    //change color when mouse over
    block.addEventListener("mouseover", function(){
      block.style.backgroundColor = "blue";
    })

    //reset warna ke warna awal
    let reset = document.getElementById("reset");
    reset.addEventListener("click", () => {
      block.style.backgroundColor = `${baseColor}`
    });
  }
}

createBlock();
