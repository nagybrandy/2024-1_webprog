/* $('footer span').on('click', ()=> {
    $('footer span').animateNumber({number: 2023, color: 'green',
    'font-size': '30px',})
})

(function (){
    const observer = new IntersectionObserver(onObserve, {
        threshold: 1.0
    })
})()
 */

const observer = new IntersectionObserver(onObserve, {
    threshold: 1.0
})

function onObserve(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            $(entry.target).animateNumber({number: entry.target.dataset.num})
        }
    });
}

document.querySelectorAll('.animnum').forEach(e => observer.observe(e))
