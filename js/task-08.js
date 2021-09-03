// 08 Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>
// <div id="boxes"></div>

const el = document.querySelector('#controls');
const inputEl = el.firstElementChild;
const createBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const divBox = document.querySelector('#boxes');

// let amount = inputEl.value
//   console.log(amount)

const createBoxes = amount => {
  const divBoxesArray = [];
   for (let i = 0; i < inputEl.value; i += 1){
     const divEl = document.createElement('div');
   divEl.style.width = 30 + i * 10 + 'px';
     divEl.style.height = 30 + i * 10 + 'px';
     divEl.style.backgroundColor = colorRGB();
     divBoxesArray.push(divEl);
   }
 
  divBox.append(...divBoxesArray);
}
createBtn.addEventListener('click', createBoxes);

function colorRGB() {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}

destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
    divBox.innerHTML = "";
}