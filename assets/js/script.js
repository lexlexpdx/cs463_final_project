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

/*
=============================================
Contact form actions
=============================================

Sources: 
email validation regex: https://www.geeksforgeeks.org/javascript/javascript-program-to-validate-an-email-address/
phone validation regex: https://www.geeksforgeeks.org/javascript/how-to-validate-phone-numbers-using-javascript/

*/

const contactForm = document.querySelector(".contact-container form");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector('button[type="submit"]');
const nameInput = document.querySelector("#name");
const companyInput = document.querySelector("#company");
const phoneInput = document.querySelector("#phone");

function isValidEmail(value) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhoneNumber(phone) {
	const regex = /^\d{3}-\d{3}-\d{4}$/;
	return regex.test(phone);
}

function validateForm() {
	const valid =
		isValidEmail(emailInput.value.trim()) &&
		nameInput.value.trim() !== "" &&
		companyInput.value.trim() !== "" &&
		isValidPhoneNumber(phoneInput.value.trim());

	return valid;
}

contactForm.addEventListener("submit", (event) => {
	event.preventDefault();
	validateForm();

	if (submitButton.disabled) {
		alert(
			"Please complete all fields and ensure phone format is 555-555-5555. Try again.",
		);
		return;
	}

	alert("Form submitted successfully.");
	contactForm.reset();
	validateForm();
});

validateForm();
