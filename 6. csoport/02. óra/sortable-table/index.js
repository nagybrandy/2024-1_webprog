/*
    [
        [ Alma, Békés Vármegye ],
        [ Körte, Hajdú-Bihar Vármegye ],
        [ Szilva, Szabolcs Vármegye ],
        [ Barack, BAZ Vármegye  ]
    ]
*/

// 1. Táblázat legenárálása
// 2. Fejlécre kattintva rendezzen az adott oszlopra
const data = [
    [ "Alma", "Békés Vármegye"],
    [ "Körte", "Hajdú-Bihar Vármegye"],
    [ "Barack", "Szabolcs Vármegye"],
    [ "Szilva", "BAZ Vármegye" ]
]
const table = document.createElement('table')

const drawTable = () => {
    table.innerHTML = '<thead><tr><th>Gyümölcs</th><th>Megye</th></tr></thead>'
    data.forEach(datarow => {
        const row = document.createElement('tr')
        datarow.forEach(cellText => {
            const td = document.createElement('td')
            td.innerText = cellText
            row.append(td)
        })
        table.append(row)
    })
    document.querySelector('body').append(table)
}

drawTable()

document.querySelector('thead').addEventListener('click', (e)=> {
    table.innerHTML = ""
    const ind = [...e.target.parentElement.children].indexOf(e.target)
    data.sort((a,b) => a[ind] < b[ind] ? -1 : 1)
    drawTable()
})