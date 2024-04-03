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
    vy: 0, // velocity - y angle (vertical angle) px/s
    ay: 250, // acceleration - y angle (vertical) px/s^2
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

let game = true
function gameLogic(currentTime = performance.now()){
    if(game){
        let dt =  (currentTime - lastFrameTime) / 1000
        lastFrameTime = currentTime
        //console.log(dt)
        stateUpdater(dt)
        draw()
        requestAnimationFrame(gameLogic)
    }
}

const stateUpdater = (dt) => {
    bird.vy += bird.ay * dt
    bird.y += bird.vy * dt
    columns.forEach(c => {
        c.x -= 100 * dt
        if(isColliding(bird, c)) gameOver()
    })
    if(columns[0].x < 0) {
        newColumns()
        points++;
    }
    if(bird.y < 0 || bird.y > canvas.height)  gameOver()
}

function gameOver(){

    bird.y = canvas.height/2
    bird.ay = 250
    bird.vy = 0
    game = false
}
document.addEventListener('keypress', (e)=> {
    if(e.code == 'Space') {
        bird.vy = -200   
    }

})

function isColliding(bird,column){
    return !(
        bird.y > column.y + column.h ||
        bird.x > column.x + column.w ||
        column.x > bird.x + bird.w ||
        column.y > bird.y + bird.h
    )
}
const draw = () => {
    ctx.drawImage(bg, 0, 0)
    ctx.drawImage(bird.img, bird.x, bird.y, bird.w, bird.h)
    columns.forEach(c => ctx.drawImage(colpic, c.x, c.y, c.w, c.h))
    ctx.font = '20px Arial'
    ctx.fillText(`Points: ${points}`, 30, 40)
}

newColumns()
bird.vy = -200
gameLogic()

document.querySelector('div').addEventListener('click', (e)=> {
    newColumns()
    bird.y = canvas.height/2
    bird.ay = 250
    bird.vy = 0
    requestAnimationFrame(gameLogic)
    game = true
})
