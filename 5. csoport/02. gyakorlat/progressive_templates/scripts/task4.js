const outer_div = document.createElement('div')
const inner_div = document.createElement('div')
outer_div.append(inner_div)

outer_div.style = 'width: 100%; height: 5px; background-color: gray; position: fixed; z-index: 9999'
inner_div.style = 'width: 30%; height: 100%; background-color: #F4623A;transition: 0.s'

document.querySelector('body').prepend(outer_div)

window.addEventListener('scroll', _.throttle(()=> {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    inner_div.style.width = scrolled + "%";
}, 100))

const evt = new Event('scroll', {bubbles: true})
window.dispatchEvent(evt)

// alt+le mozgat
// shift+alt+le duplikál
// befejezni
