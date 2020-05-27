
let description = document.querySelectorAll('.conatiner-description')

let platillo = document.querySelectorAll('.food-link')


platillo.forEach(item => {
    item.addEventListener('click', (e) => {
        
        console.log(item.parentElement.previousSibling.previousElementSibling.classList.toggle('desactive'))
        e.preventDefault()
    })
})

description.forEach(item => {
    
        let salir = item.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling
        
        salir.addEventListener('click', () => {
            salir.parentNode.parentNode.parentNode.classList.toggle('desactive')
        })
    
})