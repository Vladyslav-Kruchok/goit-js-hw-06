/*
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
*/
const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', e => {
    const inputLength = e.currentTarget.value.length;
    const requiredLength  = Number(validationInput.dataset.length);
    if (inputLength === requiredLength)
    {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid')
    }
    else
    {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid') 
    }
});