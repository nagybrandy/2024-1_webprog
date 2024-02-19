/* $('footer span').on('click', () => {
    $('footer span').animateNumber(
        { 
           number: 2023, 
           'font-size': '30px', 
        }, 
        {
            easing: 'swing',
            duration: 3000
        })
}) */

/* (function () {
const observer = new IntersectionObserver(onObserve, {
    threshold: 1.0,
})})() */

const observer = new IntersectionObserver(onObserve, {
    threshold: 1.0,
})

function onObserve(entries){
    entries.forEach( entry => {
        if(entry.isIntersecting){
            $(entry.target).animateNumber(
            { 
                number: 2023, 
                'font-size': '20px', 
            })
        }
    })
}
observer.observe(document.querySelector('footer span'))


