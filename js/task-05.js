/*
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

*/
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', e => {
    const char = e.currentTarget.value;
    if (char)
    {
        nameOutput.textContent = char;
    }
    else
    {
        nameOutput.textContent = 'Anonymous';
    }
});