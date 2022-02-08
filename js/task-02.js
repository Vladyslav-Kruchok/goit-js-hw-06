/*
Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul.ingredients.
*/
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredients_ul = document.querySelector('#ingredients');
const CreateLi = (item) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = item;
    return li.outerHTML;
};
const str = ingredients
  .map((item) => CreateLi(item))
  .join('\n');
ingredients_ul.insertAdjacentHTML('beforeend', str);