//Без приведения к числу

var a = prompt('Введите объем памяти айфона','');
var exch = prompt('Курс доллара?','27');
if (exch == null) a = null;
if (isNaN(exch)) a = 'd';

var cost;
switch (a) {
    case '8' :
        alert('Стоимость ' + exch * 600 + ' грн') ;
        break;
    case '16':
        alert('Стоимость ' + exch * 700 + ' грн') ;
        break;
    case '32':
        alert('Стоимость ' + exch * 800 + ' грн') ;
        break;
   case null:
        alert('Вы отменили запрос');
        break;
    default:
        alert( 'Нет такого объема памяти либо вы ввели не число');
        break;
}


//С приведением к числу, с точными ошибками

// var a = +prompt('Введите объем памяти айфона','');
// var exch = +prompt('Курс доллара?','27');
// if (isNaN(exch) || isNaN(a) ) a = 'f';
// if (exch == 0) a = 0;
// var cost;
// switch (a) {
//     case 8:
//         alert('Стоимость ' + exch * 600 + ' грн') ;
//         break;
//     case 16:
//         alert('Стоимость ' + exch * 700 + ' грн') ;
//         break;
//     case 32:
//         alert('Стоимость ' + exch * 800 + ' грн') ;
//         break;
//    case 0:
//         alert('Вы отменили запрос');
//         break;
//    case !isNaN(a) || a:
//         alert('Вы ввели не число');
//         break;
//     default:
//         alert( 'Нет такого объема памяти');
//         break;
// }
