// Функция формат даты и время
function setLocalDate () {
    const date = new Date();
    const options = {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', };
    return new Intl.DateTimeFormat('de-CH', options).format(date);
}

function greeting () {
    const userLocStor = localStorage.getItem('myVisitName');
    if (!userLocStor) {
        // Если пользователь зашел в первый раз, выводится окно prompt с сообщением.
        // После того, как пользователь введет имя, записуем имя, дату и время визита в localStorage.
        const userName = prompt ("Добро пожаловать! Назовите, пожалуйста, ваше имя");
        localStorage.setItem('myVisitName',userName);
    } else {
        // Если пользователь открывает страницу не впервые, выводим в alert сообщение 
        alert(`Добрый день, ${localStorage.getItem('myVisitName')}! Давно не виделись. В последний раз вы были у нас ${localStorage.getItem('myVisitDate')}`);
        }
    // Перезаписуем дату последнего посещения.
    localStorage.setItem('myVisitDate', setLocalDate ());
}

// Вывод данных в документ
function writeTime () {
    document.querySelector('.local__time').innerHTML = setLocalDate ();
    document.querySelector('.visit__time').innerHTML = localStorage.getItem('myVisitDate');
    document.querySelector('.user').innerHTML = localStorage.getItem('myVisitName');
}

// Кнопак отчистки localStorage
document.querySelector('.js-clear-locStor').addEventListener('click', ()=> {
    localStorage.clear();
    clearInterval(id);
    setInterval(writeTime, 1000);
})
// Отсчёт времени в секундах
const id = setInterval(writeTime, 1000);
greeting ();


