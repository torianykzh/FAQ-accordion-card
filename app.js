const faq = document.querySelectorAll(".faq")

faq.forEach(element => {
    element.addEventListener('click', ()=>{
        element.classList.toggle('active')
    })
});

const link = document.querySelectorAll("a")

link.forEach(el =>{
    el.addEventListener('click', (event)=>{
        event.stopPropagation();
    })
})