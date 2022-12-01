const burgerMenu = document.querySelector('.header_burger_menu');
if(burgerMenu){
    burgerMenu.addEventListener('click', function(e){
        const navMenu = document.querySelector('.header_navigation')
        navMenu.classList.toggle('_active');
    }) 

}

