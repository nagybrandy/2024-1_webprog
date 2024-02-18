let shapes = ["circle", "rect", "rect", "circle", "circle", "rect", "circle", "circle", "rect"];
let originalDiv = document.querySelector("#original");
let t1div = document.querySelector("#t1");
let t2div = document.querySelector("#t2");
let t3div = document.querySelector("#t3");
let t4div = document.querySelector("#t4");
let t5div = document.querySelector("#t5");
let t6div = document.querySelector("#t6");
let t7div = document.querySelector("#t7");
let t8div = document.querySelector("#t8");

// Original
draw(shapes, originalDiv);

// 1. Make every element of the original array a circle!
let task1 = shapes.map(e => "circle");
draw(task1, t1div);

// 2. What is the sum of this array? [1,2,3,4,5]
let task2 = [1, 2, 3, 4, 5];
let total = task2.reduce((p, c) => p + c);
t2div.innerHTML = total;

// 3. Keep only the squares!
let task3 = [];
task3 = shapes.filter(e => e == "rect")
draw(task3, t3div)

// 4. Where is the first square located?
let task4;
task4 = shapes.indexOf('rect')
t4div.innerHTML = task4 + 1 ;

// 5. Do we have a square in the array?
let task5;
task5 = shapes.some(e => e == 'rect')
if(task5){
    t5div.innerHTML = "Yes, there is."
} else {
    t5div.innerHTML = "No, there is not."
}
// 6. Are all elements circles?
let task6; 
t6div.innerHTML = shapes.every(e => e == 'circle')

// 7. How many squares and circles are there?
let task7;
let squarenum = shapes.filter(e=> e === 'rect').length
let circlenum = shapes.filter(e=> e === 'circle').length
t7div.innerHTML = `Circlenum: ${circlenum}, Squarenum: ${squarenum}`

// 8. Starting from the third element, make every element a circle!
let task8 = [];
task8 = shapes.fill('circle', 2)
draw(task8, t8div)

function draw(array, div) { // Draws the array and where to display it
    for (let i = 0; i < array.length; i++) {
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        let svgNS = svg.namespaceURI;
        svg.setAttribute('width', 60);
        svg.setAttribute('height', 60);
        var shape = document.createElementNS(svgNS, array[i]);
        if (array[i] == "rect") {
            shape.setAttribute('width', 60);
            shape.setAttribute('height', 60);
            shape.setAttribute('fill', '#fcba03');
        } else {
            shape.setAttribute('cx', 30);
            shape.setAttribute('cy', 30);
            shape.setAttribute('r', 30);
            shape.setAttribute('fill', '#034701');
        }
       
        svg.appendChild(shape);
        div.appendChild(svg);
    }
}

let planets = [
    {"name": "P26-007", "info": "Friendly", "gate": "Destroyed"},
    {"name": "P2A-018", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P2A-270", "info": "Hostile", "gate": "Reachable"},
    {"name": "P2A-347", "info": "Hostile", "gate": "Reachable"},
    {"name": "P2A-463", "info": "Neutral", "gate": "Reachable"},
    {"name": "P2A-509", "info": "Hostile", "gate": "Reachable"},
    {"name": "P2C-257", "info": "Friendly", "gate": "Reachable"},
    {"name": "P2M-903", "info": "Hostile", "gate": "Reachable"},
    {"name": "P2R-866", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P2X-338", "info": "Hostile", "gate": "Reachable"},
    {"name": "P2X-374", "info": "Neutral", "gate": "Reachable"},
    {"name": "P2X-416", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P2X-555", "info": "Friendly", "gate": "Reachable"},
    {"name": "P2X-787", "info": "Friendly", "gate": "Reachable"},
    {"name": "P2X-885", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P2X-887", "info": "Hostile", "gate": "Reachable"},
    {"name": "P3A-194", "info": "Friendly", "gate": "Destroyed"},
    {"name": "P3C-117", "info": "Neutral", "gate": "Reachable"},
    {"name": "P3C-249", "info": "Neutral", "gate": "Destroyed"},
    {"name": "P3C-599", "info": "Friendly", "gate": "Destroyed"},
    {"name": "P3K-447", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3L-997", "info": "Friendly", "gate": "Reachable"},
    {"name": "P3M-736", "info": "Friendly", "gate": "Destroyed"},
    {"name": "P3R-112", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3R-118", "info": "Hostile", "gate": "Reachable"},
    {"name": "P3R-233", "info": "Hostile", "gate": "Reachable"},
    {"name": "P3R-272", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3R-636", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3S-114", "info": "Friendly", "gate": "Destroyed"},
    {"name": "P3S-452", "info": "Hostile", "gate": "Reachable"},
    {"name": "P3W-451", "info": "Hostile", "gate": "Destroyed"},
    {"name": "P3W-924", "info": "Hostile", "gate": "Reachable"},
    {"name": "P3X-116", "info": "Neutral", "gate": "Reachable"},
    {"name": "P3X-118", "info": "Friendly", "gate": "Destroyed"},
    {"name": "P3X-233", "info": "Neutral", "gate": "Reachable"},
    {"name": "P3X-234", "info": "Hostile", "gate": "Destroyed"},
    {"name": "P3X-289", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3X-298", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3X-367", "info": "Hostile", "gate": "Destroyed"},
    {"name": "P3X-403", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3X-421", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3X-439", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3X-447", "info": "Friendly", "gate": "Reachable"},
    {"name": "P3X-474", "info": "Hostile", "gate": "Reachable"},
    {"name": "P3X-562", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3X-584", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3X-595", "info": "Hostile", "gate": "Reachable"},
    {"name": "P3X-666", "info": "Hostile", "gate": "Reachable"},
    {"name": "P3X-729", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3X-744", "info": "Neutral", "gate": "Destroyed"},
    {"name": "P3X-775", "info": "Friendly", "gate": "Reachable"},
    {"name": "P3X-797", "info": "Friendly", "gate": "Reachable"},
    {"name": "P3X-8596", "info": "unknown", "gate": "Not visited yet"},
    {"name": "P3X-888", "info": "Hostile", "gate": "Destroyed"},
    {"name": "P3X-984", "info": "unknown", "gate": "Not visited yet"}
  ]
  console.log(planets.filter(e=> e["gate"] == "Destroyed"))