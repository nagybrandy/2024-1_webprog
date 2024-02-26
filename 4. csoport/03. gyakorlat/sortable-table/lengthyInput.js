class LengthyInput extends HTMLInputElement {
    constructor(){
        super()
        console.log(this)
        this.div = document.createElement('div')
        this.div.innerText = `A szöveg hossza: ${this.value.length}`
        this.div.style = `
            color: darkgreen;
            font-size: 0.7em;
            font-style: italic;
        `
        this.after(this.div)
        this.addEventListener('input', this.onInput)
    }

    onInput = () => {
        this.div.innerText = `A szöveg hossza: ${this.value.length}`
    }
}

customElements.define('lengthy-input', LengthyInput, {extends: 'input'})