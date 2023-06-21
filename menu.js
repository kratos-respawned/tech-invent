const menuOn = document.getElementById('menu-btn')
const menuClose = document.getElementById('menu')
let state = false; 

menuOn.addEventListener('click' ,()=>{
    menuClose.style.transform = 'translateX(0px)'
    menuClose.style.transition = "transform 700ms ease-in-out 0s"
    console.log('helloworld')
})


menuClose.addEventListener('click',()=>{
    menuClose.style.transform = 'translateX(100%)'
    menuClose.style.transition = 'transform 700ms ease-in-out 0s'
})