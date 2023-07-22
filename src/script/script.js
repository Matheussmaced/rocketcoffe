

document.addEventListener('DOMContentLoaded', ()=>{

    const btnMenu = document.querySelector('#menu');
    const btnCafe = document.querySelector('#cafe');
    const desktopStyleId = document.querySelector('#desktop');
    const h3 = document.querySelector('h3');
    const blur = document.querySelector('#blurMobile');
    const links = document.querySelector('#links')
    
    btnMenu.addEventListener('click', ()=>{

        if(btnMenu){
            btnCafe.classList.toggle('hide')
            h3.classList.toggle('hide')
            blur.classList.toggle('hide')
            btnMenu.classList.toggle('menuStyle')

            links.classList.toggle('links')
            desktopStyleId.classList.toggle('hide')
        }
    })

})