document.querySelector('button').onclick = function () {
    let start = document.querySelector('#start-date').value;
    let end = document.querySelector('#end-date').value;
    let out = document.querySelector('#out')

    start = Date.parse(start); // Метод Date.parse() разбирает строковое представление даты и возвращает количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.
    end = Date.parse(end);

    let time = 24*60*60*1000; // 24 часа, 60 минут ...
    for (let i = start; i <= end; i = i + time) {
        out.innerHTML += new Date(i).toISOString().substr(0,10) + '<br>';
    }// находим диапазон дат
}