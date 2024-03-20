const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')
const bg_img = new Image();
bg_img.src = "pics/bg.png"
const col_img = document.querySelector('img#column')
let columns = [];
let points = 0

const bird = {
    img: document.querySelector('img#bird'),
    x: 50,
    y: canvas.height/2,
    w: 45,
    h: 35,
    vy: 0, // px/s
    ay: 250
}

const SPACE_BTW_COLS = 150
function newColumns(){
    const a = 10;
    const b = canvas.height/2
    const h = Math.floor(Math.random() * (b-a+1)) + a

    columns = [
        {
            x: canvas.width,
            y: 0,
            w: 30,
            h: h,
        }, 
        {
            x: canvas.width,
            y: h + SPACE_BTW_COLS,
            w: 30,
            h: canvas.height - SPACE_BTW_COLS - h,
        }
    ]
}

// changing the state of the elemenets (e.g. changing the x position)
let lastUpdateTime = performance.now()

window.addEventListener('keydown', (e)=> {
    e.preventDefault()
    if(e.code == "Space") bird.vy = -200
})

function gameLogic(nowTime = performance.now()){
    //console.log(performance.now())
    let dt = (nowTime-lastUpdateTime) / 1000
    lastUpdateTime = nowTime
    update(dt);
    draw();
    requestAnimationFrame(gameLogic);
}

function update(dt) {
    bird.vy += bird.ay * dt
    bird.y += bird.vy * dt;
    columns.forEach(e => {
        e.x -= 100 * dt;
        if(isColliding(bird, e)) alert('BIRD DIED 😭😭😭') // windows + .
    })
    if(columns[0].x < 0) {
        newColumns()
        points++;
    }
}

function isColliding(a, b) {
    return !(
        b.y + b.h  < a.y ||
        a.x + a.w < b.x ||
        a.y + a.h  < b.y ||
        b.x + b.w < a.x
    );
}
// rendering the changes    

function draw() {
    ctx.drawImage(bg_img, 0,0, canvas.width, canvas.height)
    ctx.drawImage(bird.img,bird.x, bird.y, bird.w, bird.h)
    ctx.font = '25px Arial'
    columns.forEach(e => {
        ctx.drawImage(col_img,e.x, e.y, e.w, e.h)
    })
    ctx.fillText(`Points: ${points}`, 20, 30)
}

newColumns()
gameLogic();
