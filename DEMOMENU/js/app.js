
let description = document.querySelectorAll('.conatiner-description')

let platillo = document.querySelectorAll('.single-menu-item')


platillo.forEach(item => {
    item.addEventListener('click', () => {
        const elemet = item.parentElement.previousSibling.previousElementSibling
        if(elemet.classList.contains('conatiner-description')) {
            console.log('funciona!!')
            console.log(elemet.classList.toggle('desactive'))
        }
    })
})

description.forEach(item => {
        let salir = item.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling
        let elemet = salir.parentNode.parentNode.parentNode
        salir.addEventListener('click', () => {
            if(elemet.classList.contains('conatiner-description')) {
                console.log('hola')
                elemet.classList.toggle('desactive')
            }
           
        })
    
})