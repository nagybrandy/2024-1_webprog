/*
    [
        ["Leo", "cirmos"],
        ["Lajos", "fehér"]

    ]
*/


class SortableTable extends HTMLTableElement {
    constructor(){
        super()
        this.tbody = this.querySelector('tbody')
        this.data = [...this.tbody.querySelectorAll('tr')].map(row => [...row.querySelectorAll('td')].map(cell => cell.innerText))
        this.tHead.addEventListener('click', this.onClick)
    }

    onClick = (e) => {
        let ind = [...e.target.parentElement.children].indexOf(e.target);
        [...this.tHead.firstElementChild.children].forEach(e => e.classList.remove('kivalasztott'))
        this.tHead.firstElementChild.children[ind].classList.add('kivalasztott')
        this.data.sort((a,b) => a[ind] > b[ind] ? 1 : -1)
        this.tbody.innerHTML = ""
        this.data.forEach(row =>{
            const tr = document.createElement('tr')
            row.forEach(cellData => {
                const td = document.createElement('td')
                td.innerText = cellData
                tr.append(td)
            })
            this.tbody.append(tr)
        })
    }
}

customElements.define('sortable-table', SortableTable, {extends: 'table'})