// ki kell szedni a htmlből a nav
// window hozzáadunk egy eseménykezelőt
// megnézzük hogy nagyobb e a scrolling mint 200, ha igen, add class

const nav = document.querySelector('nav')
window.addEventListener('scroll', _.throttle(onScroll,1000))

function onScroll(){
    nav.classList.toggle('navbar-scrolled', window.scrollY > 200)
}

/* let waiting = false
function onScroll(){
    if(!waiting){
        nav.classList.toggle('navbar-scrolled', window.scrollY > 200)
        waiting = true
        console.log("asd")
        setTimeout(()=> waiting = false, 1000)
    }

} */