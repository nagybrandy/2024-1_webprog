const amountSpan = document.querySelector("#amount");
const banknoteContainer = document.querySelector("#banknotes");
const table = document.querySelector("tbody");
const select = document.querySelector("select");
const transferButton = document.querySelector("button");

console.log(people);

const rows = table.querySelectorAll('tr')
rows.forEach(e => e.innerHTML = '')

people.map(person => {
    const option = document.createElement('option')
    option.innerHTML = person.name
    select.append(option)
})
const createTable = ()=>  {
    people.map(person => {
        const values = Object.values(person)
        values.map((value,i) => {
            let newtd;
            if(i == 1) {
                newtd = document.createElement('td')
                const img = document.createElement('img')
                img.src = "img/" + value
                newtd.append(img)
            } else {
                newtd = document.createElement('td')
                newtd.innerHTML = value
            }
            rows[i].appendChild(newtd)
        })
})
}
banknoteContainer.addEventListener('click', (e) => {
    if (e.target.matches('img')) {
        amountSpan.innerHTML = parseInt(amountSpan.innerHTML) + parseInt(e.target.dataset.value)
    }
})

transferButton.addEventListener('click', ()=> {
    console.log(select.value, amountSpan.innerHTML)
    const ind = people.findIndex(e => e.name === select.value)
    people[ind].paid += parseInt(amountSpan.innerHTML)
    amountSpan.innerHTML = 0
    rows.forEach(e => e.innerHTML = '')
    createTable()
})

createTable()
