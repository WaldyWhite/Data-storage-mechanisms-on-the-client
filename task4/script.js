
// Получаем элемент из document 
let resultDoc = document.querySelector('.containet-box__result');

// Переменная и функция для подсчета и отображения секунд
let countVar = 1;
function countFu () {
    document.querySelector('.waiting-time').innerHTML = `Waiting time: ${countVar} s`
    countVar++
}

const id = setInterval(countFu, 1000)

// Создаём Promise
const promise = new Promise((resolve, reject) => {
    // С Задержкой в три секунды сгенерируется случайное целое число от 1 до 100
    setTimeout(() => {
        let randomNumber = Math.round(Math.random() * 100 + 1)
        // Если сгенерированное число четное — Promise выполнится успешно (resolve), если нечетное — выполнится с ошибкой (reject).
        if(randomNumber%2 === 0) {
            resolve(`Завершено успешно. Сгенерированное число — ${randomNumber}.`)
        } else {
            reject(`Завершено с ошибкой. Сгенерированное число — ${randomNumber}.`)
        }
    }, 3000)

});

promise
    .then((result) => {
        resultDoc.innerHTML = result;
        console.log(result)
    })

    .catch((error) => {
        resultDoc.innerHTML =  error;
        console.log(error)
    })

    .finally(() => {
        clearInterval(id);
        document.querySelector('.waiting-time').innerHTML = '';
    })

