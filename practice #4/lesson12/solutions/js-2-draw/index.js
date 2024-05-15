const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

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

// Time-based animation (from the lecture slide)
let lastFrameTime = performance.now();

function next(currentTime = performance.now()) {
    const dt = (currentTime - lastFrameTime) / 1000; // seconds
    lastFrameTime = currentTime;

    update(dt); // Update current state
    render(); // Rerender the frame
    requestAnimationFrame(next);
}

function update(dt) {
    for (const ball of balls) {
        ball.x += dt * ball.vx;
        ball.y += dt * ball.vy;
        if (circleCollision(ball, bowl)) {
            let { vx, vy } = calculateReflection(ball);
            ball.vx = vx;
            ball.vy = vy;
        }
    }
}

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgba(127, 127, 127, 0.5)";
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.beginPath();
    context.arc(bowl.x, bowl.y, bowl.r, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
    for (const ball of balls) {
        context.fillStyle = "yellow";
        context.beginPath();
        context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = "black";
        context.fillText(ball.id, ball.x - 5, ball.y + 5);
    }
}

function init() {
    balls = [];
    for (let id = 1; id < 90; id++) {
        const rad = random(20, 200);
        const phi = Math.random() * 2 * Math.PI;
        balls.push({
            id,
            x: 300 + Math.round(rad * Math.sin(phi)),
            y: 300 + Math.round(rad * Math.cos(phi)),
            vx: (Math.random() < 0.5 ? 1 : -1) * random(50, 500),
            vy: (Math.random() < 0.5 ? 1 : -1) * random(50, 500),
            r: 15
        });
    }
}

init();
next();

function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
