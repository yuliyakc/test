// const float = 42.42
// const pow = 10e3

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Math.pow(2,53) -1)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)
// console.log(2/0)
// console.log(Number.NaN)
// const weird = 2/ undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isFinite(42))
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt)+2) 
// console.log(0.4 + 0.2) //0.6
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))
// console.log(typeof -900719925474099199999n)
// console.log(10n - BigInt(4))
console.log(Math.sqrt(5))
function getRandomBetween(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandomBetween(10, 42))