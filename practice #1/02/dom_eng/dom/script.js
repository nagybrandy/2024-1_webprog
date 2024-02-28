// Task 1
const button1 = document.querySelector('#task1 button')
const input1 = document.querySelector('#task1 input')
const helloText = document.querySelector('#task1 #helloText')

button1.addEventListener('click', sayHello)

function sayHello(){
    helloText.style.fontSize = '100px';
    helloText.innerText = `Hello ${input1.value}!`
}

// Task 2
const button2 = document.querySelector('#task2 button')
const input2 = document.querySelector('#task2 input')
const helloRepeats = document.querySelector('#task2 #helloRepeats')

button2.addEventListener('click', ()=> {
    helloRepeats.innerHTML = ""
 
    let val2 = parseInt(input2.value)
    for (let i = 0; i < val2; i++) {
        const new2 = document.createElement('p') // <p></p>
        new2.innerText = "Hello World!"
        new2.style.fontSize = `${i*10+15}px`
        console.log(new2)
        helloRepeats.append(new2)
    }
})

// Task 3
const button3 = document.querySelector('#task3 button')
const input3 = document.querySelector('#task3 input')
const result = document.querySelector('#task3 #circleResult')

button3.addEventListener('click', ()=> {
    result.innerText = 2*Math.PI*parseInt(input3.value)
})

// Task 4
const links = document.querySelectorAll('a')
const ul = document.querySelector('#hyperlinksList')

links.forEach( link => {
    const li = document.createElement('li')
    li.innerText = link.href
    ul.append(li)
})

// Task 5
const button5 = document.querySelector('#task5 button')
const input5 = document.querySelector('#task5 input')
const imageContainer = document.querySelector('#imageContainer')

button5.addEventListener('click', ()=> {
    const img = document.createElement('img')
    img.src = input5.value
    img.style.width = '500px'
    imageContainer.append(img)
})

// Task 6
const children = [
    { name: "Anna", class: "3/A", age: 8 },
    { name: "Bence", class: "4/B", age: 9 },
    { name: "Cecilia", class: "2/C", age: 7 },
    { name: "David", class: "5/D", age: 10 },
    { name: "Emma", class: "1/E", age: 6 }
];

const table6 = document.querySelector('#task6 table')
const inputs = document.querySelectorAll('#task6 input')
const button6 = document.querySelector('#task6 button')

button6.addEventListener('click', ()=> {
    const data = [...inputs].map(e => e.value)
    console.log(data)
    const tr = document.createElement('tr')
    data.forEach(cell => {
        const td = document.createElement('td')
        td.innerText = cell
        tr.append(td)
    })
    table6.append(tr)
})

children.forEach(kid =>{
    const tr = document.createElement('tr')
    Object.values(kid).forEach(prop => {
        const td = document.createElement('td')
        td.innerText = prop
        tr.append(td)
    })
    table6.append(tr)
})

/* BAD :) 
document.querySelectorAll('#task6 td').forEach(e=>{
    e.addEventListener('click', ()=> {
        e.style.backgroundColor = 'green'
    }) 
})
*/
table6.addEventListener('mouse', (e)=> {
    // delegating -> the event bubbles down to each descendant
    console.log(e.ctrlKey)
    if(e.target.matches('td')) {
        if(!e.ctrlKey) e.target.style.backgroundColor = 'green'
        else e.target.style.backgroundColor = 'unset'
    }

})
// Task 7
const booksList = [
    {
        author: "J.K. Rowling",
        title: "Harry Potter and the Philosopher's Stone",
        publicationYear: 1997,
        publisher: "Bloomsbury",
        isbn: "978-0747532743"
    },
    {
        author: "George Orwell",
        title: "1984",
        publicationYear: 1949,
        publisher: "Secker & Warburg",
        isbn: "978-0451524935"
    },
    {
        author: "Harper Lee",
        title: "To Kill a Mockingbird",
        publicationYear: 1960,
        publisher: "J. B. Lippincott & Co.",
        isbn: "978-0061120084"
    },
    {
        author: "F. Scott Fitzgerald",
        title: "The Great Gatsby",
        publicationYear: 1925,
        publisher: "Charles Scribner's Sons",
        isbn: "978-0743273565"
    },
    {
        author: "Leo Tolstoy",
        title: "War and Peace",
        publicationYear: 1869,
        publisher: "The Russian Messenger",
        isbn: "No ISBN"
    }
];

// Task 8

// Task 9

// Task 10

document.querySelectorAll("ul li a").forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent the page from jumping to the link on click
        const targetId = this.getAttribute("href").substring(1); // Get the value of the "href" attribute without the "#" symbol
        const tasks = document.querySelectorAll(".task");
        tasks.forEach(function(task) {
            if (task.id === targetId) {
                task.classList.add("current");
            } else {
                task.classList.remove("current");
            }
        });
    });
});
