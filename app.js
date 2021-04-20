const btnMenu = document.querySelector('#menu');
const el = document.getElementsByClassName('nav_link');
const menu = document.querySelector('#myTopnav');
const toggleMenu = function () {
	menu.classList.toggle('responsive');
}

btnMenu.addEventListener('click', function (e) {
	// e.stopPropagation();
	toggleMenu();
});

for (var i = 0; i < el.length; i++) {
	el[i].onclick = function (e) {
		// e.stopPropagation();
		toggleMenu();
	}
}

document.addEventListener('click', function (e) {
	const target = e.target;
	const its_menu = target == menu || menu.contains(target);
	const its_btnMenu = target == btnMenu;
	const menu_is_active = menu.classList.contains('responsive');

	if (!its_menu && !its_btnMenu && menu_is_active) {
		toggleMenu();
	}
});





