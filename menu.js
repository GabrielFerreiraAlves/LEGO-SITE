//MENU
let checkbox = document.getElementById('menubtn').addEventListener('click', () => {
    let menu = document.getElementById('menuUl')
    let body = document.querySelector('body')
    let bi = document.getElementById('bi')
    let bi1 = document.getElementById('bi1')
    let logo = document.getElementById('logo-lego')
    let menuButton = document.getElementById('mnbtn')

    if(menu.style.left === '-31px'){
        menu.style.left = '-115%'
        body.style.overflow = 'initial'
        logo.classList.remove('logoresponse')
        bi.style.display = 'initial'
        bi1.style.display = 'initial'
        menuButton.style.transform = 'translateX(0px)'
    }else{
        menu.style.left = '-31px'
        body.style.overflow = 'hidden'
        logo.classList.add('logoresponse')
        bi.style.display = 'none'
        bi1.style.display = 'none'
        menuButton.style.transform = 'translate(-2px,4px)'
    }
})