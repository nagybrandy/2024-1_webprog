const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const bg = document.querySelector('#bg')
const colpic = document.querySelector('#col')
let points = 0

const bird = {
    x: 50,
    y: canvas.height/2,
    w: 50,
    h: 40,
    speed: 140,
    img: document.querySelector('#bird')
}

const GAP = 150
columns = []
function newColumns(){
    // 10-Canvas.width/2
    const firstColHeight = getRndInteger(10, canvas.height/2)
    columns = [
        {
            x: canvas.width,
            y: 0,
            w: 30,
            h: firstColHeight,
        },        
        {
            x: canvas.width,
            y: firstColHeight + GAP,
            w: 30,
            h: canvas.height - firstColHeight - GAP,
        },
    ]
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let lastFrameTime = performance.now()

function gameLogic(currentTime = performance.now()){
    let dt =  (currentTime - lastFrameTime) / 1000
    lastFrameTime = currentTime
    //console.log(dt)
    stateUpdater(dt)
    draw()
    requestAnimationFrame(gameLogic)
}

const stateUpdater = (dt) => {
    bird.y += bird.speed * dt
    columns.forEach(c => c.x -= 100 * dt )
    if(columns[0].x < 0) {
        newColumns()
        points++;
    }
}
document.addEventListener('keypress', (e)=> {
    if(e.code == 'Space') {
        bird.y -= 80    
    }

})
const draw = () => {
    ctx.drawImage(bg, 0, 0)
    ctx.drawImage(bird.img, bird.x, bird.y, bird.w, bird.h)
    columns.forEach(c => ctx.drawImage(colpic, c.x, c.y, c.w, c.h))
    ctx.font = '20px Arial'
    ctx.fillText(`Points: ${points}`, 30, 40)
}

newColumns()
gameLogic()
