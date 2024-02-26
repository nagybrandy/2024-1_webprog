/*
    [
        [ Alma, Békés Vármegye ],
        [ Körte, Hajdú-Bihar Vármegye ],
        [ Szilva, Szabolcs Vármegye ],
        [ Barack, BAZ Vármegye  ]
    ]
    const data = [
    [ "Alma", "Békés Vármegye"],
    [ "Körte", "Hajdú-Bihar Vármegye"],
    [ "Barack", "Szabolcs Vármegye"],
    [ "Szilva", "BAZ Vármegye" ]
]
const table = document.createElement('table')
*/

// 1. Táblázat legenárálása
// 2. Fejlécre kattintva rendezzen az adott oszlopra



class SortableTable extends HTMLTableElement{
    constructor(){
        super()
        // const table = document.querySelector('table') -> this
        this.tbody = this.querySelector('tbody')
        this.data = [...this.tbody.querySelectorAll('tr')].map(e=> [...e.querySelectorAll('td')].map(e => e.innerText))
        console.log(this.data)
        this.tHead.querySelectorAll('th').forEach(e=> e.innerText = e.innerText + "⬆️")
        this.querySelector('thead').addEventListener('click', this.onClick)
    } 
    drawTable = () => {
        this.tbody.innerHTML = ''
        this.data.forEach(datarow => {
            const row = document.createElement('tr')
            datarow.forEach(cellText => {
                const td = document.createElement('td')
                td.innerText = cellText
                row.append(td)
            })
            this.tbody.append(row)
        })
    }

    onClick = (e) =>  {
        console.log(this)
        const ind = [...e.target.parentElement.children].indexOf(e.target)
        const th = this.querySelector('thead').querySelector('tr').children[ind]
        //th.innerText = th.innerText + "⬇️"
        this.data.sort((a,b) => a[ind] < b[ind] ? -1 : 1)
        this.drawTable()
    }
}

customElements.define('sortable-table', SortableTable, {extends: 'table'})
