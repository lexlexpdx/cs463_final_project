/*
=============================================
Navbar actions
=============================================
*/

const navbarToggle = document.querySelector(".navbar-site-toggle");
const navbarMenu = document.querySelector(".navbar-site-menu");

navbarToggle.addEventListener("click", () => {
	navbarToggle.classList.toggle("active");
	navbarMenu.classList.toggle("active");
});
