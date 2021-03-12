//Function Declaration
function greet(name) {
  console.log('Привет-', name)
}
greet('Лена')
//Function Expression
const greet2 = function(name) { // можно добавить название функции
   console.log('Привет2-', name)
}
greet2('Оля')

console.dir(greet)

// Анонимные функции
// Стрелочная функция
const arrow = (name) => {
 console.log('Привет-', name) 
}
arrow('Yuliya')

// Параметры по умолчанию 
const sum = (a,b) => a + b
// Если не передадим один параметр - будет NaN
console.log(sum(3))
// Можно задать параметр по умолчанию 
const sum1 = (a, b = 1) => a + b
console.log(sum1(3))
// Замыкания
function createMember(name) {
 return function (lastName) {
   console.log (name+lastName)
 }
}
const logWithlastName = createMember('Yuliya')
console.log(logWithlastName('Kozina'))