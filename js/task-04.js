/*
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
*/
let counterValue = 0;
const refVal = document.querySelector('#value');

//1
/*
const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');

btnDec.addEventListener('click', e => {
    //reset default behavior
    e.preventDefault();
    counterValue--;
    refVal.textContent = counterValue;
});
btnInc.addEventListener('click', e => {
    //reset default behavior
    e.preventDefault();
    counterValue++;
    refVal.textContent = counterValue;
});
*/
//2
const divCounter = document.querySelector('#counter');
divCounter.addEventListener('click', e => {
    //reset default behavior
    e.preventDefault();
    const targetClick = e.target.dataset.action;
    if (targetClick === 'decrement') {
        counterValue--;
    }
    if (targetClick === 'increment') { 
        counterValue++;
    }
    refVal.textContent = counterValue;
})