/*п. 1*/
var Tc = parseInt(prompt('Сколько по цельсию?', 0));
var Tf = (9 / 5) * Tc + 32;
alert(Tf);

/*п. 2*/
var a = 30;
var b = 10;
console.log(a, b);
b = b + a; //теперь значение b – 10 + 30 = 40 и так считается на следующем вызове;
a = b - a; //теперь значение а – 40 - 10 = 30 и так считается на следующем вызове;
b = b - a; //теперь значение b – 40 - 30 = 10. Готово, переменные поменлись значениями
console.log(a, b);

/*п. 3*/
var admin;
var name = 'Василий';
admin = name;
alert(admin);

/*п. 4*/
//1108, т.к. "+" преобразует стоку в число

/*п. 5*/
var n = 10;
