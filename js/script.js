let hamBurger = document.getElementById('hamBurger');
let secMenu = document.getElementById('secMenu');
let closeBtn = document.getElementById('closeBtn')




hamBurger.addEventListener('click', () => {
    secMenu.style.top = 0;


})



closeBtn.addEventListener('click', () => {
    
    secMenu.style.top = '100vh';

})

function toogleOffNav(){
    secMenu.style.top = '100vh';
}

console.log('log');

// chaning bg color of navbar while scrolling

let navbar = document.getElementById('navbar');

document.getElementById('navigations').children.item(1).style.color=('text-black')

window.onscroll = () => {
    if (window.scrollY > 300) {
        // navbar.style.backgroundColor = 'white';
        
        navbar.classList.add('bg-white',  'drop-shadow-lg')
     for (let i=0; i < document.getElementById('navigations').children.length; i++) {
        document.getElementById('navigations').children[i].classList.remove('text-white')
        document.getElementById('navigations').children[i].classList.add('text-black')
    }
     for (let i=0; i < document.getElementById('hamBurger').children.length; i++) {
        document.getElementById('hamBurger').children[i].classList.remove('bg-slate-200')
        document.getElementById('hamBurger').children[i].classList.add('bg-blue-900')
    }

    }
    else {
        navbar.classList.remove('bg-white',  'drop-shadow-lg')
        for (let i=0; i < document.getElementById('navigations').children.length; i++) {
            document.getElementById('navigations').children[i].classList.add('text-white')
            document.getElementById('navigations').children[i].classList.remove('text-black')
    
        }
        for (let i=0; i < document.getElementById('hamBurger').children.length; i++) {
            document.getElementById('hamBurger').children[i].classList.add('bg-slate-200')
            document.getElementById('hamBurger').children[i].classList.remove('bg-blue-900')
        }
    }
};