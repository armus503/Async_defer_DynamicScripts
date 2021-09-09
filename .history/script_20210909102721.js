"use strict";

const p = document.querySelectorAll('p');
console.log(p);

const script = document.createElement('script'); //создаем новый элемент script
script.src = '/test.js'; //помещаем в него атрибут с путем к файлу
script.async = false; //если применить таким образом атрибут async, то данный скрипт будет себя вести как обычный скрипт
document.body.append(script); //добавляем его в body