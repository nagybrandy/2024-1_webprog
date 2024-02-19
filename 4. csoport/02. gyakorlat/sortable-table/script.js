/*
    [
        [Hüpi, hupikék],
        [Wall-E, cirmos]
    ]
*/

const tbody = document.querySelector('.sortableTable tbody')

const data = [...tbody.querySelectorAll('tr')]
                .map(row => [...row.querySelectorAll('td')]
                            .map(cell => cell.innerText))

document.querySelector('thead').addEventListener('click', (e)=> {
    let ind = [...e.target.parentElement.children].indexOf(e.target)
    data.sort((a,b)=> a[ind] > b[ind] ? 1 : -1)
    console.log(data)

    tbody.innerHTML = ""
    data.forEach(row =>{
        const tr = document.createElement('tr')
        row.forEach(cell => {
            const td = document.createElement('td')
            td.innerText = cell
            tr.append(td)
        })
        tbody.append(tr)
    })
})