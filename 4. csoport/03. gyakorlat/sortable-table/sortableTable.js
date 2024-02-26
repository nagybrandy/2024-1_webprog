/*
    [
        [Hüpi, hupikék],
        [Wall-E, cirmos]
    ]
*/



class SortableTable extends HTMLTableElement {
    constructor(){
        super()
        this.tbody = this.querySelector('tbody')
        this.data = [...this.tbody.querySelectorAll('tr')]
                        .map(row => [...row.querySelectorAll('td')]
                                    .map(cell => cell.innerText))
        this.querySelector('thead').addEventListener('click', this.onClick)
    }

    onClick = (e) => {
            let ind = [...e.target.parentElement.children].indexOf(e.target)
            //console.log(this)
            this.data.sort((a,b)=> a[ind] > b[ind] ? 1 : -1)
            //console.log(this.data)

            this.tbody.innerHTML = ""
            this.data.forEach(row =>{
                const tr = document.createElement('tr')
                row.forEach(cell => {
                    const td = document.createElement('td')
                    td.innerText = cell
                    tr.append(td)
                })
                this.tbody.append(tr)
        })
    }
}

customElements.define('sortable-table', SortableTable, {extends: 'table'})
