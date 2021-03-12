// Context
const person = {
   name: 'Yuliya',
   age: 30,
   greet() {
       console.log('greet from person')
   },
   info() {
       console.info('Информация про человека по имени:', this.name)
   }
}
//person.info()
const logger = {
    keys(obj) {
     console.log('Object keys: ', Object.keys(obj))
    }
}
logger.keys(person)

