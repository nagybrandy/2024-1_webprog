const outer_div = document.createElement('div')
outer_div.style = 'width: 100%; height: 5px; z-index:10000; background-color:gray; position:fixed'

const inner_div = document.createElement('div')
inner_div.style= 'width:50%; height:100%; background-color:#F4623A'
outer_div.append(inner_div)

document.querySelector('body').prepend(outer_div)

window.addEventListener('scroll', ()=> {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    inner_div.style.width = scrolled + "%";
})


// esemény meghívása - beállítása