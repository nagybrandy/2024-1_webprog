const outer_div = document.createElement('div')
outer_div.style = 'width: 100%; height: 6px; background-color: gray;position:fixed;z-index:9999'

const inner_div = document.createElement('div')
inner_div.style = 'width: 30%;height: 100%; background-color: #F4623A'

outer_div.append(inner_div)

document.querySelector('body').prepend(outer_div)

window.addEventListener('scroll', _.throttle(()=> {
    //console.log(document.body.scrollTop || document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight)
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    inner_div.style.width = scrolled + "%"; 
}, 50))

const evt = new Event('scroll', {bubbles: true})
document.dispatchEvent(evt)