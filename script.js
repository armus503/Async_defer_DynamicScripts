"use strict";

const p = document.querySelectorAll('p');
console.log(p);

function loadScript(src) { //создадим функцию для загрузки динамических скриптов
    const script = document.createElement('script'); //создаем новый элемент script
    script.src = src; //помещаем в него атрибут с путем к файлу
    script.async = false; //если применить таким образом атрибут async, то данный скрипт будет себя вести как обычный скрипт
    document.body.append(script); //добавляем его в body
}

loadScript("/test.js"); //сначала загрузится этот скрипт
loadScript('/some.js'); //и за ним по порядку этот скрипт, т.к. asunc установили false