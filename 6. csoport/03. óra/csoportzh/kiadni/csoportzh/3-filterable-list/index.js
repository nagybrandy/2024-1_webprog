class FilterableList extends HTMLUListElement {
    constructor(){
        super()
        console.log(this)
        this.input = document.createElement('input')
        this.prepend(this.input)
        this.listItems = this.querySelectorAll('li')
        this.input.addEventListener('input', this.onInput)
    }

    onInput = (e) => {
       /*  console.log(e.target.value) */
        this.listItems.forEach(li=> li.hidden = !li.innerText.includes(e.target.value))
    }
}

customElements.define('filterable-list', FilterableList, {extends: 'ul'})