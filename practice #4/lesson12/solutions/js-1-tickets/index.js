const task1 = document.querySelector("#task1");
const task2 = document.querySelector("#task2");
const task3 = document.querySelector("#task3");
const task4 = document.querySelector("#task4");
const task5 = document.querySelector("#task5");

console.log(tickets)

task1.innerHTML = tickets.length;

task2.innerHTML = tickets.filter(t => t.includes(42)).length;

task3.innerHTML = tickets.find(t => t.every(x => x <= 20)).join(", ");

task4.innerHTML = (
    tickets.reduce((s, t) => s + t.reduce((u, v) => u + v, 0), 0) /
    (5 * tickets.length)
).toFixed(4);

task5.innerHTML = Array(90)
    .fill(0)
    .map((_, i) => ({
        number: i + 1,
        count: tickets.filter(t => t.includes(i + 1)).length
    }))
    .sort((a, b) => b.count - a.count)[0].number;
