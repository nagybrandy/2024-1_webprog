// kiszedni az elemet egy konstansba
// esemény - görgetésnél
// rárakni a navbar-scrolled classt HA 200 px-t elgörgettünk

const nav = document.querySelector('nav')

window.addEventListener('scroll', _.throttle(onScroll, 1000))

function onScroll(e){
    nav.classList.toggle('navbar-scrolled', window.scrollY > 200)
}

/* let waiting = false
function onScroll(e){
    if(!waiting) {
        console.log("asd")
        nav.classList.toggle('navbar-scrolled', window.scrollY > 200)
        waiting = true
        setTimeout(()=> waiting = false, 1000)
    }

     if(window.scrollY > 200) nav.classList.add('navbar-scrolled')
    else nav.classList.remove('navbar-scrolled') 
} */