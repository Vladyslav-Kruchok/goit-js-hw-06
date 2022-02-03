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

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/
const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', e => {
    const len = e.currentTarget.value.length;
    const dsLen = Number(validationInput.dataset.length);
    const classL = validationInput.classList;
    if (len === dsLen)
    {
        if (classL.contains(!'invalid'))
        {
            classL.add('valid');
        }
        else
        {
            classL.remove('invalid');
            classL.add('valid');
        }
    }
    else
    {
        classL.add('invalid');
    }
});