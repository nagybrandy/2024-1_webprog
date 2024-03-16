const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.moveTo(0, 0);
ctx.lineTo(30,30)
ctx.lineTo(40,10)
ctx.closePath()
ctx.fillStyle = 'green';
ctx.strokeStyle = 'red';
ctx.lineWidth = 10;
ctx.fill()
ctx.stroke()

ctx.fillRect(10,10,100,100)