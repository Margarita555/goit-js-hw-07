// 02Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement()

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const makeIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const liEl = document.createElement('li');
    liEl.textContent = ingredient;

    return liEl;
  });
};

const elements = makeIngredientsList(ingredients);

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...elements);






