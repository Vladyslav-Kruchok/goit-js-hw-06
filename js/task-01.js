/*
Напиши скрипт, який:

Порахує і виведе в консоль
- кількість категорій в ul#categories, тобто елементів li.item.
- Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
- і кількість елементів в категорії (усіх <li>, вкладених в нього).
В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/
//"use strict"
const info = (item) =>
{
    console.log(`\nCategory: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);

}
const ul_categories = document.querySelector("ul#categories");
console.log(`Number of categories: ${ul_categories.children.length}`);
//1
// for (let i = 0; i < ul_categories.children.length; i++)
// {
//     info(ul_categories.children[i]);
// }

const ul_item = document.querySelectorAll("li.item");
//2
// for (let i = 0; i < ul_item.length; i++)
// {
//     info(ul_item[i]);
// }
//3
ul_item.forEach(item => info(item));
