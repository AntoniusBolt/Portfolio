// navigation javascript for mobile screen

let headerMain = document.querySelector(".header-main");
let headerMobileBtn = document.querySelector(".mobile-menu-btn");

let isMenuOpen = false;

headerMobileBtn.onclick = function() {
	if (!isMenuOpen) {  // NOT open
		headerMain.style.display = "flex";
		isMenuOpen = true;
	}
	else if (isMenuOpen) {
		headerMain.style.display = "none";
		isMenuOpen = false;
	}
}