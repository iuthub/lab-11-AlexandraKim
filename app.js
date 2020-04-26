window.onload = function (){
	let calculator = document.querySelector('.calculator')
	let keys = calculator.querySelector ('.calculator__keys')
	const display = document.querySelector('.calculator__display')
	let leftPart = ''
	let rightPart = ''
	let operator = null
	keys.addEventListener('click', function (e) {
		if (e.target.matches('button')) {
			const key = e.target
			const action = key.dataset.action
			const keyContent = key.textContent
			const displayedNum = display.textContent

			
			if (!action) {
				console.log ('number key !')
				if (operator == null) {
					leftPart += keyContent
				} else {
					rightPart += keyContent
				}
				console.log(leftPart)
				console.log(rightPart)
			}
			if ( action === 'add' ||
				action === 'subtract' ||
				action === 'multiply' ||
				action === 'divide') { 
					console . log ('operator key !') 
				operator = keyContent
			}
			
			if ( action === 'decimal') {
				console.log (' decimal key !')
				if (operator == null) {
					leftPart += keyContent
				} else {
					rightPart += keyContent
				}
			}
			if ( action === 'clear') {
				console.log (' clear key !')
				display = ''
				leftPart = ''
				leftPart = ''
				operator = null
			}
			if ( action === 'calculate') {
				console.log (' equal key !')
				display.textContent += calculate();
			}
			
			if (displayedNum === '0') {
				display.textContent = keyContent
			} else {
				display.textContent = displayedNum + keyContent
			}
			
		}
	})

	function calculate() {
		let result = '';
		switch(operator) {
			case '+':
				result = Number(leftPart) + Number(rightPart);
			break;
			case '-':
				result = Number(leftPart) - Number(rightPart);
			break;
			case '*':
				result = Number(leftPart) * Number(rightPart);
			break;
			case '/':
				result = Number(leftPart) / Number(rightPart);
			break;
		}

		return result;

	}
}
