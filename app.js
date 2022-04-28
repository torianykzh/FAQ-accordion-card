const faq = document.querySelectorAll(".faq")

faq.forEach(element => {
    element.addEventListener('click', ()=>{
        element.classList.toggle('active')
    })
});