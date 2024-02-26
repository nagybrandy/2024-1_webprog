class LengthyInput extends HTMLInputElement {
    constructor(){
        super()
        this.div = document.createElement('div')
        this.div.innerText = `A szöveg hossza: ${this.value.length}`
        this.div.style = `
            color: green;
            font-style: italic;
            font-size: 0.8em;
        `
        this.after(this.div)
        this.addEventListener('input', this.onInput)
    }

    onInput = ()=> {
        this.div.innerText = `A szöveg hossza: ${this.value.length}`
    }
}

customElements.define('lengthy-input', LengthyInput, {extends: 'input'})