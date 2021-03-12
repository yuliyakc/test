const cars = ['Мазда', 'Мерседес', 'Опель']
const fib = [1, 2, 3, 5, 8, 13, 21, 34]
// //console.log(cars)
// cars.push('Рено') //добавил элемент массива
// //console.log(cars)
// console.log(cars.reverse())
// console.log(cars)

// const text = 'Привет, мы'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)
// const index = cars.indexOf('Мерседес')
// cars[index] = 'Порш'
// console.log(cars)
const people = [
    {name: 'Yuliya', budget: 4200},
    {name: 'Olga', budget: 3200},
    {name: 'Helen', budget: 2200}
]
// let findedPerson
// for (const person of people) {
//     if (person.budget === 3200) {
//        findedPerson = person
//     }
// }
// console.log(findedPerson) 
// const person = people.find (person => person.budget === 3200) //лямда функция
// console.log(person)
const pow2 = num => num**2
const pow2Fib = fib.map(pow2)
console.log(pow2Fib)