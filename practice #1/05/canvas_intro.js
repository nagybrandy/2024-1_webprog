const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')

console.log('asd')
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(20,20)
ctx.lineTo(20,400)
ctx.lineTo(200,400)
ctx.lineWidth = 1;
ctx.closePath();
ctx.fillStyle = 'green'
ctx.fill()
ctx.stroke()

ctx.strokeRect(20,20,50,50)
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();