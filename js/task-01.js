// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).


const categoriesList = document.querySelector('#categories')
console.log(`В списке ${categoriesList.children.length} категории.`)

const lists = document.querySelectorAll('.item')
const qwe = lists.forEach(category => { 
  console.log(`Категория:${category.firstElementChild.textContent}`)
  console.log(`Количество элементов:${category.lastElementChild.children.length}`)
})