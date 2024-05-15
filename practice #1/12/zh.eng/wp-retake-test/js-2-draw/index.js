const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

// starting data / kiinduló adatok

const bowl = {
    x: 300,
    y: 300,
    r: 250
};

const ball = {
    id: 42,
    r: 15,
    x: 200,
    y: 400,
    vx: 100,
    vy: 120
};

let balls = [
    ball,
    {
        id: 67,
        r: 15,
        x: 100,
        y: 300,
        vx: 56,
        vy: 100
    }
];

// utility functions / segédfüggvények

const random = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

const circleCollision = (c1, c2) =>
    Math.sqrt((c1.x - c2.x) ** 2 + (c1.y - c2.y) ** 2) + c1.r > c2.r;

const calculateReflection = ball =>
    reflectInsideSphere(ball.vx, ball.vy, ball.x, ball.y, bowl.x, bowl.y);

const reflectInsideSphere = (vx, vy, x, y, cx, cy) => {
    let collisionVectorX = x - cx;
    let collisionVectorY = y - cy;
    const distance = Math.sqrt(collisionVectorX ** 2 + collisionVectorY ** 2);
    collisionVectorX /= distance;
    collisionVectorY /= distance;
    const dotProduct = vx * collisionVectorX + vy * collisionVectorY;
    const vxPrime = vx - 2 * dotProduct * collisionVectorX;
    const vyPrime = vy - 2 * dotProduct * collisionVectorY;
    return { vx: vxPrime, vy: vyPrime };
};

// time-based animation (from the lecture slide) / időalapú animáció (az előadásdiákból)

let lastFrameTime = performance.now();

function next(currentTime = performance.now()) {
    const dt = (currentTime - lastFrameTime) / 1000;
    lastFrameTime = currentTime;

    update(dt); // update current state / jelenlegi állapot frissítése
    render();   // rerender the frame / képkocka újrarajzolása
    requestAnimationFrame(next);
}

function update(dt) {
    balls.map(e=> {
        e.x = e.vx * dt
        e.y = e.vy * dt
    })
}

function render() {
    context.clearRect(0,0,canvas.width, canvas.height)
    context.beginPath();
    context.arc(bowl.x, bowl.y, bowl.r, 0, 2 * Math.PI);
    context.lineWidth = 10
    context.fillStyle = "#eeeeee99"
    context.fill()
    context.stroke();
    balls.map(ball => {
        context.beginPath();
        context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
        context.lineWidth = 1
        context.fillStyle = "yellow"
        context.fill()
        context.fillStyle = "black"
        context.fillText(ball.id, ball.x-5, ball.y+5)
        context.stroke();
    })
}

next();