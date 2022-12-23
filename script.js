pickedColor = "";

// Create the color picker element
let colorPicker = document.createElement('input');
colorPicker.type = 'color';
colorPicker.value = pickedColor;
document.body.insertAdjacentElement('beforeend', colorPicker);

// Update the base color when the color picker value changes
colorPicker.addEventListener('change', function() {
  pickedColor = colorPicker.value;
});

// Create function to make random color
function randomizeColors() {
  let blocks = document.querySelectorAll('.block');
  blocks.forEach(block => {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    block.style.backgroundColor = randomColor;
  });
}

//Create a button to trigger the randomizeColors function
let randomizeButton = document.createElement('button');
randomizeButton.innerHTML = "Randomize Colors"; //Masukkan text kedalam button
document.body.insertAdjacentElement("beforeend", randomizeButton); //Masukkan elemen ini kedalam body HTML dibagian akhir

randomizeButton.addEventListener("click", randomizeColors); //Trigger fungsi randomizeColors ketika button ditekan

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


