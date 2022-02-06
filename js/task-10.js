/*
Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
*/
const boxInto = document.querySelector('#boxes');
const controlsBox = document.querySelector('#controls');
let amount = 0;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const createBoxes = (amount) => {
  let color = [];
  for (let i = 0; i < amount; i++)
  {
    color.push(`
      <div style = "background-color: ${getRandomHexColor()}; width: 30px; height: 30px;"></div>
      `);
  }
  return color;
};
const destroyBoxes = () => {
    boxInto.innerHTML = '';
}
controlsBox.addEventListener('click', e => { 
  if (e.target.localName === 'input')
  {
    amount = e.target.value;
  }
  if (e.target.dataset.create === '')
  {
    boxInto.setAttribute("style", 'display: flex; flex-wrap: wrap');
    boxInto.insertAdjacentHTML('beforeend', createBoxes(amount));
  }
  if (e.target.dataset.destroy === '')
  {
    destroyBoxes();
  }
});

