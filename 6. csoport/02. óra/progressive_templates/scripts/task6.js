/* $('footer span').on('click', (e)=> {
    $('footer span').animateNumber({number: 2023})
}) */

const onObserve = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            $('footer span').animateNumber({number: 2023})
        }
    });
}

const observer = new IntersectionObserver(onObserve, {
    threshold: 1.0
})


observer.observe(document.querySelector('footer span'))