const fs=require ('fs')
const path=require ('path')

/*fs.mkdir(path.join(__dirname, 'test'), (err) => {
if (err) {
throw err
}
  
console.log ('Папка создана')
} ) 
*/

const filePath  = path.join(__dirname, 'test', 'text1.txt')

fs.writeFile (filePath, 'Hello Node JS' , err => {
if (err) {
throw err
}
console.log ('Файл создан')
} ) 


 