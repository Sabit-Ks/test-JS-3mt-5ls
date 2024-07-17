//Напишите функцию, которая проверяет, содержит ли строка только цифры

const regExp = /\d/g

const containsOnlyDigits = (str) => {
		if(regExp.test(str)) {
			console.log('true')
		}else{
			console.log('false')
		}
}
console.log(containsOnlyDigits('12345')) // Выведет true
console.log(containsOnlyDigits('12a45')) // Выведет false


// Напишите функцию, которая каждую секунду выводит в консоль сообщение "Прошла секунда"
const timer = () => {
	setInterval(() => {
		console.log('Прошла секунда')
	},1000)
}
timer()


//Вывести числа от 1 до 10 с интервалом в 1 секунду, затем остановить
const count = () => {
    let i = 0;
    const interval = setInterval(() => {
		console.log(++i);
	},1000);

	setInterval(()=>{
		clearInterval(interval)
	},10000)

}
count()

//Создать блок 150 на 150 пикселей и получить его через дом 
// элементы при нажатии на которую будет меняться его задний фон при 
// повторном нажатии будет убираться цвет заднего фона - выполните эту
//  задачу с использованием classList и его методов

const changeColor = document.querySelector('.parent')

changeColor.onclick = (event) => {
	if(event.target.tagName.toLowerCase() === 'div'){
		if (event.target.classList.contains('red')) {
			event.target.classList.remove('red')
		} else {
			event.target.classList.add('red')
		}
	}
}


// Отправить GET запрос на такой JSON 

const getsBtn = document.querySelector('#gets')
getsBtn.onclick = () => {
	const request = new XMLHttpRequest()
	request.open('GET', 'example.json')
	request.setRequestHeader('Content-type', 'application/json')
	request.send(request.response)
	console.log(request);
}


