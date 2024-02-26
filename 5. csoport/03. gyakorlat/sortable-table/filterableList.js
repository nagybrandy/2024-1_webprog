class FilterableList extends HTMLUListElement {
    constructor(){
        super()
        this.input = document.createElement('input', { is: 'lengthy-input' })
        this.input.is
        this.prepend(this.input)
        this.data = this.querySelectorAll('li')
        this.input.addEventListener('input', this.onInput)
    }

    onInput = () => {
        this.data.forEach(e => e.hidden = !e.innerText.includes(this.input.value))
    }
}

customElements.define('filterable-list', FilterableList, {extends: 'ul'})
