
// elmenteni, lekérni a navbart
// nézni kéne, hogy mikor görgetsz - eventlistener, scroll
// ha görgetünk, tegye rá :) 
const nav = document.querySelector('nav')
window.addEventListener('scroll', _.throttle(onScroll, 500))

/* let waiting = false
function onScroll(e){
    if(!waiting){
        console.log("asd")
        nav.classList.toggle('navbar-scrolled', window.scrollY > 200)
        waiting = true
        setTimeout(()=> waiting = false, 100)
    }
        if(window.scrollY > 200) {
        nav.classList.add('navbar-scrolled')
    } else {
        nav.classList.remove('navbar-scrolled')
    } 
} */


function onScroll(e) {
    nav.classList.toggle('navbar-scrolled', window.scrollY > 200)
}
