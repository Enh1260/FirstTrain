let openMenuBtn = document.getElementsByClassName('home__menu-icon')[0];
let closeMenuBtn = document.getElementsByClassName('m-menu__close')[0];
let mobileMenu = document.getElementsByClassName('header__menu-mobile')[0];

const openMenu = function(){
	mobileMenu.style.display='block';
}
const closeMenu = function(){
	mobileMenu.style.display='none';
}
openMenuBtn.addEventListener('click', openMenu)
closeMenuBtn.addEventListener('click', closeMenu)

const menuLinksList = document.querySelectorAll('a[href^="#"]');
for(let menuLink of menuLinksList){
	menuLink.addEventListener('click', function(e){
		console.log(e);
		e.preventDefault;
		const id = menuLink.getAttribute('href');
		console.log(id)
		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}