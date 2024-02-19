/*
    [
        ["Leo", "cirmos"],
        ["Lajos", "fehér"]

    ]
*/

const tbody = document.querySelector('.sortableTable tbody')
const data = [...tbody.querySelectorAll('tr')].map(row => [...row.querySelectorAll('td')].map(cell => cell.innerText))

document.querySelector('thead').addEventListener('click', (e)=> {
    let ind = [...e.target.parentElement.children].indexOf(e.target)
    data.sort((a,b) => a[ind] > b[ind] ? 1 : -1)

    tbody.innerHTML = ""
    data.forEach(row =>{
        const tr = document.createElement('tr')
        row.forEach(cellData => {
            const td = document.createElement('td')
            td.innerText = cellData
            tr.append(td)
        })
        tbody.append(tr)
    })
})