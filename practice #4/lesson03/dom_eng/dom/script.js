// Task 1
const button1 = document.querySelector('#task1 button')
const input1 = document.querySelector('#task1 input')
const displayText = document.querySelector('#helloText')

button1.addEventListener('click', sayHello)

function sayHello() {
    displayText.innerText = `Hello ${input1.value}!` 
}

/* input1.addEventListener('input', ()=> {
    displayText.innerText = input1.value
}) */
// Task 2
const task2div = document.querySelector('#task2')
const input2 = task2div.querySelector('input')
const button2 = task2div.querySelector('button')
const displayDiv2 = task2div.querySelector('#helloRepeats')

button2.addEventListener('click', () => {
    displayDiv2.innerHTML = ""
    for (let i = 0; i < parseInt(input2.value); i++) {
        const newp = document.createElement('p')
        newp.innerText = 'Hello World!'
        newp.style.color = 'green'
        newp.style.fontSize = `${i*5+15}px`
        displayDiv2.append(newp)
    }
})

// Task 3
const task3div = document.querySelector('#task3')
const input3 = task3div.querySelector('input')
const button3 = task3div.querySelector('button')
const result3 = task3div.querySelector('#circleResult')

input3.addEventListener('input', ()=> {
    result3.innerText = `The circle's perimeter is: ${2 * Math.PI * input3.value}`
})

// Task 4

const links = document.querySelectorAll('a')
const ul4 = document.querySelector('#hyperlinksList')

links.forEach(e=> {
    // create a new list item
    // list items innerText should be the links href then
    // we have to add the list items to the list
    const li = document.createElement('li')
    li.innerText = e.href
    ul4.append("li")
})
console.log(links)
// Task 5
const input5 = document.querySelector('#task5 input')
const button5 = document.querySelector('#task5 button')
const div5 = document.querySelector('#imageContainer')

button5.addEventListener('click', ()=>{
    const img = document.createElement('img')
    img.src = input5.value
    img.style.width = '50%'
    div5.append(img)
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

children.forEach(kid => {
    const tablerow = document.createElement('tr')
    Object.values(kid).forEach(e => {
        const tablecell = document.createElement('td')
        tablecell.innerText = e
        tablerow.append(tablecell)
    })
    table6.append(tablerow)
})

const button6 = document.querySelector('#task6 button')
const inputs6 = document.querySelectorAll('#task6 input')

button6.addEventListener('click', ()=> {
    const data = [...inputs6].map(e => e.value)

    const tablerow = document.createElement('tr')

    data.forEach(e => {
        const td = document.createElement('td')
        td.innerText = e
        tablerow.append(td)
    })

    table6.append(tablerow)
})

/* table6.querySelectorAll('td').forEach(td =>{
    td.addEventListener('click', (e)=> {
        e.target.style.backgroundColor = 'red'
    })
})
 */


// DELEGATING
table6.addEventListener('click', (e)=> {
    console.log(e)
    if(e.target.matches('td')) {
        if(e.shiftKey){
            e.target.style.backgroundColor = 'unset'
        } else {
            e.target.style.backgroundColor = 'red'
        }
    }
})

// const a = [1,2,3,4] -> a.map(e => e = e + 1) =====> new ARRAY => [2,3,4,5]
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
