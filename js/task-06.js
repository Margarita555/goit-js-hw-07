// 06 Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputFocus);
function onInputFocus() {
    const length = this.value.length;
    const necessaryLength = input.getAttribute('data-length');

    if (length == necessaryLength) {
        input.classList.add('valid');
        if (input.classList.contains('invalid')){
              input.classList.remove('invalid')  
            };
  } else if (length != necessaryLength){
        input.classList.add('invalid');
        if (input.classList.contains('valid')){
              input.classList.remove('valid')  
            };
    } if (length == "") {
        input.classList.remove('valid');
        input.classList.remove('invalid');
    }
};