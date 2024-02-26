class LengthyInput extends HTMLInputElement {
    constructor(){
        super()
        this.addEventListener('input', this.onInput)
        this.div = document.createElement('div')
        console.log(this.asd)
        this.div.style = `  margin-top: 0px;
                            font-size: 0.7em;
                            font-style: italic;
                            color: ${this.dataset.color};
                            font-weight: 900;
                            font-family:'Courier New', Courier, monospace;`
        this.div.innerText = `A szöveg hossza: ${this.value.length}`
        this.after(this.div)
    }

    onInput = () => {
        this.div.innerText = `A szöveg hossza: ${this.value.length}`
    }
}

customElements.define('lengthy-input', LengthyInput, {extends: 'input'})