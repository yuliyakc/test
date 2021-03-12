//Event Loop
// setTimeout( ()=>{  // данная фукция вызовется, когда пройдет 2,5 секунды
//  console.log('After timeout')
// }, 2500)
const heading = document.getElementById('hello')
console.dir(heading.id)
setTimeout( () => {
 heading.textContent = 'Change'
 heading.style.color = 'red'
 heading.style.textAlign = 'center'
}, 1500)

heading.onclick = () =>{
console.log('click')
}
