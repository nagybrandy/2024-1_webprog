const amountSpan = document.querySelector("#amount");
const banknoteContainer = document.querySelector("#banknotes");
const table = document.querySelector("tbody");
const select = document.querySelector("select");
const transferButton = document.querySelector("button");

console.log(people);

// TASK 1-2
banknoteContainer.addEventListener('click', (e)=> {
    //console.log(e.target)
    if(e.target.matches('img')){
       amountSpan.innerHTML = parseInt(amountSpan.innerHTML) + parseInt(e.target.dataset.value)
    }
})

// TASK 3

const trows = table.querySelectorAll('tr')
trows.forEach(e => e.innerHTML = '')

console.log(trows)


const generateTable = ()=> {
    people.map((person,personindex) => {
        const personData = Object.values(person)
        console.log(personData)
        personData.forEach((e,i) => {
            if(i == 1) {
                const td = document.createElement('td')
                const img = document.createElement('img')
                img.src = "./img/" + e
                td.append(img)
                trows[i].appendChild(td)
            } else {
                const td = document.createElement('td')
                td.innerHTML = e
                trows[i].appendChild(td)
            }
        })
        if(person.paid > person.to_pay) {
            trows[2].querySelectorAll('td')[personindex].classList.add('overpaid')
        }
    })
}

generateTable()


// TASK 4
people.map(e => {
    const option = document.createElement('option')
    option.innerHTML = e.name
    select.appendChild(option)
})


// TASK 5
transferButton.addEventListener('click', ()=> {
    const ind = people.findIndex(e => e.name === select.value)
    const person = people[ind]
    person.paid += parseInt(amountSpan.innerHTML)
    amountSpan.innerHTML = 0
    console.log(people)
    trows.forEach(e => e.innerHTML = '')
    generateTable()
})
