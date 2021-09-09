"use strict";

const p = document.querySelectorAll('p');
console.log(p);

const script = document.createElement('script'); //создаем новый элемент script
script.src = '/test.js'; //помещаем в него атрибут с путем к файлу
document.body.append(script); //добавляем его в body