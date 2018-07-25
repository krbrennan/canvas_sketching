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

function draw(e) {
  // console.log(e)

  if(!isDrawing){ return }

    ctx.beginPath();
    ctx.moveTo(initX, initY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = `hsl(${color}, 50%, 50%)`
    ctx.stroke();
    color ++;
}


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => { isDrawing = true })
canvas.addEventListener('mouseup', () => { isDrawing = false })
canvas.addEventListener('mouseout', () => { isDrawing = false })
