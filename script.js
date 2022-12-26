pickedColor = "";

let title = document.createElement("h1");
title.innerHTML = "Etch a Sketch";
document.body.insertAdjacentElement("afterbegin", title);

let body = document.createElement("div");
body.setAttribute("class", "body");
document.body.appendChild(body);

let container = document.createElement("div");
container.setAttribute("class", "container");
body.appendChild(container);

//Create the container for elements except the block
let home = document.createElement("div");
home.classList.add("home");
body.insertAdjacentElement("beforeend", home);

//Make div for label and block size
let sizeContainer = document.createElement("div");
sizeContainer.setAttribute("class", "block-container");
home.insertAdjacentElement("afterbegin", sizeContainer);

//Make the label
let numLabel = document.createElement("label");
numLabel.setAttribute("for","number-input");
numLabel.innerHTML = "Change the size :";
sizeContainer.appendChild(numLabel);

//Make thing to pick block size
let numInput = document.createElement("input");
numInput.setAttribute("id", "number-input");
numInput.type = "number";
numInput.value = 16;
sizeContainer.appendChild(numInput);

numInput.addEventListener("change", () => {
  let size = numInput.value;
  createBlock(size);
  cleanAll();
})

//create div for label and color picker
let colorContainer = document.createElement("div");
colorContainer.setAttribute("class", "color-container");
home.appendChild(colorContainer);

//Create label for color picker
let colorPickerLabel = document.createElement("label");
colorPickerLabel.setAttribute("for", "color-picker");
colorPickerLabel.innerHTML = "Pick the color : ";
colorContainer.insertAdjacentElement("afterbegin", colorPickerLabel);

// Create the color picker element
let colorPicker = document.createElement('input');
colorPicker.setAttribute("id", "color-picker");
colorPicker.type = 'color';
colorPicker.value = pickedColor;
colorContainer.insertAdjacentElement('beforeend', colorPicker);

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
randomizeButton.setAttribute("id", "randomize-color");
home.insertAdjacentElement("beforeend", randomizeButton); //Masukkan elemen ini kedalam body HTML dibagian akhir

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
reset.setAttribute("id", "reset-all");
home.insertAdjacentElement("beforeend", reset);

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


