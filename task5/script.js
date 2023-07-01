// Проверка на ввод числа
function inputISNumber(input, data ,callback) {
    if(Number.isInteger(Number(input)) && Number(input) > 0) {
        callback(data);
        return  input;
    } else {
        alert('Введите число');
    }
}

//Функция обработки получения запроса
function displayTasks(apiData) {
    let tasksList = '';
    if(apiData.length > 0) {
    for(let i = 0; i < apiData.length; i++) {
        let tasksBlock = '';
        // Если completed = true задание выполнено
        if(apiData[i].completed) {
            tasksBlock =  `<li class='task' style = 'text-decoration: line-through blue;'>${apiData[i].title}</li>`;
            tasksList = tasksList + tasksBlock;
        } else {
            tasksBlock =  `<li class='task'>${apiData[i].title}</li>`;
            tasksList = tasksList + tasksBlock;
            }
        }
        document.querySelector('.tasks__list').innerHTML = tasksList;
        document.querySelector('.tasks__list').style.backgroundColor = 'rgb(241, 241, 241)';
    } else {
        document.querySelector('.tasks__list').innerHTML = `Пользователь с указанным id не найден`;
        document.querySelector('.tasks__list').style.backgroundColor = 'rgb(241, 241, 241)';
        document.querySelector('.tasks__list').style.textAlign = "center";
        }
    };
    
// Функция, которая возвращаем fetch
function dataRequest (userID) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userID}/todos`)
    .then((response) => {
        return response.json()})
    .then((json) => {
        console.log(json)
        return json;})
    .catch(() => {console.log('Error')})
}

const btnGet = document.querySelector('.js-btn-get');
// Вешаем обработчик на кнопку для запроса по клику
btnGet.addEventListener('click', async() => {
    const inputId = document.querySelector('.js-set-id').value;
    let tasks = await dataRequest(inputId);
    inputISNumber(inputId, tasks, displayTasks);
})

