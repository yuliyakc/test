const lastName = 'Kozina'
const firstName = 'Yuliya'
const age = 30
const isProgrammer = true
//lastName = 'Kozina1'

alert('Имя человека: ' + firstName + ',а возраст: ' + age)
function calculateAge(year)
{
    return 2020-year
}
const myAge = calculateAge(1993)
console.log(myAge)

//Массивы
//const cars = ['Мазда', "Мерседес", "Форд"]
//console.log(cars)
// Циклы
//for (let i = 0; i<=cars.length; i++) {
//const car = cars[i]
//console.log(car)    
//}
// Объекты
const person = {
    firstName: 'Yuliya',
    lastName: 'Kozina',
    year: 1993,
    languages: ['Ru', 'En', 'De'],
    greet: function() {
      console.log('greet')
    }
  }
  console.log(person.lastName)
  person.greet()
  const key = 'year'
  console.log(person[key])
  