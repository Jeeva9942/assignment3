const form = document.getElementById('registration-form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const contactNumberInput = document.getElementById('contactNumber');
const addressInput = document.getElementById('address');
const cityInput = document.getElementById('city');
const registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', (e) => {
	e.preventDefault();
	
	const firstName = firstNameInput.value.trim();
	const lastName = lastNameInput.value.trim();
	const email = emailInput.value.trim();
	const contactNumber = contactNumberInput.value.trim();
	const address = addressInput.value.trim();
	const city = cityInput.value.trim();
	
	if (firstName === '') {
		alert('Please enter your first name');
		firstNameInput.focus();
		return;
	}
	
	if (lastName === '') {
		alert('Please enter your last name');
		lastNameInput.focus();
		return;
	}
	
	if (email === '') {
		alert('Please enter your email');
		emailInput.focus();
		return;
	}
	
	if (!validateEmail(email)) {
		alert('Invalid email address');
		emailInput.focus();
		return;
	}
	
	if (contactNumber === '') {
		alert('Please enter your contact number');
		contactNumberInput.focus();
		return;
	}
	
	if (address === '') {
		alert('Please enter your address');
		addressInput.focus();
		return;
	}
	
	if (city === '') {
		alert('Please enter your city');
		cityInput.focus();
		return;
	}
	
	alert('Registration complete!');
});

function validateEmail(email) {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(email);
}

firstNameInput