const date = document.querySelector('#date')
const list = document.getElementById('list')
const input1 = document.getElementById('tickMark1')
const input2 = document.getElementById('tickMark2')
const input3 = document.getElementById('tickMark3')

const check = "checkmark"
const uncheck = "task-box"
const lineThrough = "lineThrough";

//Current Date

const DATE = new Date()
date.innerHTML = DATE.toLocaleDateString('en-US',{weekday : "short", month:"short", day:"numeric"})

//Strike Through Assignment

input1.addEventListener('input', (element) => {
  const pTag = document.getElementById("first")
  pTag.classList.toggle('strike-through')
})

input2.addEventListener('input', (element) => {
  const pTag = document.getElementById("second")
  pTag.classList.toggle('strike-through')
})

input3.addEventListener('input', (element) => {
  const pTag = document.getElementById("third")
  pTag.classList.toggle('strike-through')
})

// Image element
const image = document.createElement('img');

image.setAttribute('src', 'lab.png');
image.setAttribute('alt', 'lab with tubes and microscope');
image.setAttribute('width', 350);
image.setAttribute('height', 450);

const listimage = document.getElementById("listimage");
listimage.appendChild(image);