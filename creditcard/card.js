
function displayError(msg) {
	document.querySelector('.errorMsg').innerHTML = msg
}
function submitHandler(event) {
	event.preventDefault()
	let errorMsg = ''
	console.log(this.cardNumber.value)
	displayError('')
	const currentDate = new Date()
	if ('20' + this.expYear.value < currentDate.getFullYear()) {
		errorMsg += 'Card is expired\n'
	} else if (this.expMonth.value < currentDate.getMonth()) {
		errorMsg += 'Card is expired\n'
	}
	if (errorMsg !== '') {
		displayError(errorMsg)
		return false
	}
	return true
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler)