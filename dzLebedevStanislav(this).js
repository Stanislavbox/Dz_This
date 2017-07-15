// ******************Занятие № 9 (презентация)*******************
// ДЗ
// Задача №1
// Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const recetangle = {width:..., heigth:..., getSquare:...};

// function getSquare(){
//     return `Площадь фигуры: ${this.heigth * this.width}`;
// }

// var obj = {
//     width: 200,
//     heigth: 100,
//     getSquare: getSquare
// }

// console.log(obj.getSquare());

// Задача № 2
// Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетомскидки:
// function getPrice(){
//     return `Цена: ${this.price} грн`;
// }
// function getPriceWithDiscount(){
//     return `Цена: со скидкой ${this.price - (this.price/100) * this.discount.slice(0, this.discount.length-1)} грн`;
// }
// const price = {
//     price: 10,
//     discount: '15%',
//     getPrice: getPrice,
//     getPriceWithDiscount: getPriceWithDiscount
// }

// console.log(price.getPrice())
// console.log(price.getPriceWithDiscount())

// Задача №3
// Дан объект и функция:
// const user = {name: 'Abraham'},
// getUserName = function (){...};
// Внести в код такие изменения, чтобы можно было вызвать
// user.getName() и получить 'Abraham'

// const user = {name: 'Abraham'},
//       getUserName = function (){return this.name};
// user.getName = getUserName;

// console.log(user.getName());

// Задача №4
// Создать объект, у которого будет поле высота и метод "увеличить
// высоту на один". Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); //придумать свое название для метода
// object.height; //11;

// function getOne(){
//     return this.height = this.height + 1;
    
// }
// var object = {
//     height: 10,
//     inc: getOne
// }

// console.log(object.inc());

// Задача №5
// Создать объект "ваычислитель", у которого есть числовое свойсво
// "значение" и методы "удвоить", "прибавить один", "отнять один".
// Методы можно вызвать через точку, образуя цепочку методов:

// const numeration = {
//     value: 1,
//     double: function() {
//         this.value = this.value * 2
//        return this;
//         },
//     plusOne: function() {
//        this.value = this.value + 1
//       return this;
//         },
//     minusOne: function() {
//        this.value = this.value - 1
//        return this;
//     }
// } 
// numeration.double().plusOne().plusOne().minusOne();
// numeration.value

// Задача №6
// const user = {name: 'Abraham'},
//     otherUser = {
//         name: 'Jone',
//         getName: function () {return this.name;}
//     }
// // user.getName; //undefined - создано свойство(getName) объекта(user) без значения
// user.getName = otherUser.getName //взаимствуем метод у другого объекта
// user.getName();//"Abraham"
// otherUser.getName();//"Jone"

// Задача №7 
// Что вы ведет код, почему?
// function getList(){return this.list;}
// let users = {
//     length: 4,
//     list: ['Abraham', 'James', 'John', 'Stiven']
// }

// getList(); //Выведет ошибку, так как находится в глобальном контексте(window)
// users.getList = getList; //присвоили метод объекту(users);
// users.getList(); // выведет массив с именами
// getList.call(users); // выведет массив с именами, так как мы указали в каком 
// контексте вызвать функцию

// Задача №8
// Создать объект с розничной ценой и  количеством продуктов.
// Этот объект должен содержать метод для получения общей стоимости
// всех товаров (цена*количество продуктов)
// 
// var obj = {
//     price: 10,
//     quantity: 15,
//     getSum: function getSum () {return this.price * this.quantity}
// }

// Задача №9
// Создать объект из предидущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// "позаимствуйте метод из предыдущего объекта"

// var obj = {
//     price: 10,
//     quantity: 15,
//     getSum: function getSum () {return this.price * this.quantity};
// };

// var obj2 = {
//     price: 12,
//     quantity: 25
// };

// obj2.getSum = obj.getSum;
// console.log(obj2.getSum());

// Задача №10
// Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или обьект, получить результат функции
// getSquare для объекта sizes
// console.log(getSquare.call(sizes));

// Задача №11
// Дан массив let numbers = [4,12,0,10,-2,4]. Используя ссылку на
// массив numbers и Math.min, найти минимальный элемент массива

// let numbers = [4,12,0,10,-2,4];
// Math.min.apply(null, numbers);

// Задача 12
//     Исправить метод getFullHeight таким образом, чтобы можно было вычислить
// сумму трех слагаемых(высота плюс отступы).
//     Для другого объекта block{height: '5px', marginTop: '3px', marginBottom: '3px'}
// вычислить полную высоту getFullHeight, используя для этого объект element. В
// объект ничего не дописывать.
// const element = {
//     height: '15px',
//     marginTop: '5px',
//     marginBottom: '5px',
//     getFullHeight: function() {
//         return Number(this.height.slice(0,-2)) + 
//                Number(this.marginTop.slice(0,-2)) +
//                Number(this.marginBottom.slice(0,-2))
//     }
// };
// console.log(element.getFullHeight());

// var block = {height: '5px', marginTop: '3px', marginBottom: '3px'}
    
// console.log(element.getFullHeight.call(block));

// Задача №13
// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight()  и получить 25.
// let element ={
//     height: 25,
//     getHeight: function() {return this.height;}
// };
// let getElementHeight = element.getHeight.bind(element);
// console.log(getElementHeight());

// Задача №14
// В папке task1 открыть index.html в браузере. В консоли будет ошибка.
// Найти причину ошибки и исправить код.

// function getAllNames(users) {
//   return users.map(function (user) {
//     var name = user.first_name;
    
//     return {
//       name: name,
//       length: this.name.length
//     }
//   });
// }

// getAllNames(users);