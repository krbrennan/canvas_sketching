const buttons = document.querySelectorAll('button');
let style1 = false;
let style2 = false;
let style3 = false;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
color = 0

let isDrawing = false;
let initX = 0;
let initY = 0;

let lastX = 0;
let lastY = 0;

function drawStyle1(e){
  ctx.beginPath();
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = `hsl(${color}, 50%, 50%)`;
  ctx.lineWidth = 50;
  ctx.stroke();
  color ++;
}

function drawStyle2(e){
  // "Reeds"
  ctx.beginPath();
  ctx.moveTo(initX, initY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = `hsl(${color}, 50%, 50%)`;
  ctx.lineWidth = 5;
  ctx.stroke();
  color ++;
}


function drawStyle3(e){
  // "FreeForm Reeds"
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = `hsl(${color}, 50%, 50%)`;
  ctx.lineWidth = 5;
  ctx.stroke();
  color ++;
}

function draw(e){
  if(!isDrawing){return}
  if(style1 == true){
    drawStyle1(e);
  } else if(style2 == true){
    drawStyle2(e);
  } else if(style3 == true){
    drawStyle3(e) }
}

function setStyle(e){
  // When user clicks on style, set style flag to true and others to false
  if(e.target.name == 'button1'){
    [style1, style2, style3] = [true, false, false]
    ctx.clearRect(0,0, window.innerWidth, window.innerHeight)
  } else if(e.target.name == 'button2'){
    [style1, style2, style3] = [false, true, false]
    ctx.clearRect(0,0, window.innerWidth, window.innerHeight)
  } else if(e.target.name == 'button3'){
    [style1, style2, style3] = [false, false, true]
    ctx.clearRect(0,0, window.innerWidth, window.innerHeight)
  }
}

buttons.forEach((button) => {
  addEventListener('click', setStyle)
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
