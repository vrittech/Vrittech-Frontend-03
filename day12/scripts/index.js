document.title = 'Javascript class';


//8 DATA TYPES

// 1. string = 'sdadsasd sdasda' "sdasda @ #$"
// 2. Number 1 ,2 3 , -2 ,-5, 0.1 0.22
// 3. Boolean true/ false
// 4. BigInt not used
// 5. object: added data types -> object -> array -> date
// 6. null
// 7. undefined
// 8. symbol

// Declaration
// var let const

// ES6 ES5



// JAVACRIPT VS TYPESCRIPT VS ECMASCRIPT -> specification ES5 ES6 ES7 ES8 ES9 ES10

var a = 10;
var a = true;
// console.log(typeof a);

let b = 'text ok'
b = true
// console.log(typeof b);

const c = 1;

// console.log(typeof c);

const primeNumbers = '1'

// 5. object: added data types -> object -> array -> date
//Key: value
let studentInfo = {
   'First Name': 'Prashant Thapa',
   age: 25,
   'isActive': true
}


const arr = ['Vri Tech', true, 25, studentInfo]
let length = arr.length;

console.log(arr[0])
console.log(arr[length - 1].age)
console.log(arr[length])

// const currDate = new Date();
// console.log(currDate.getHours())

// console.log(typeof arr)

// /Operators
//Arthmatic operators + - * % /
console.log(1 * 2)
//remainder
console.log(5 % 4)
console.log(5 / 4)

//Assignment operators = /

let sum = 0;
sum += 10;
console.log(studentInfo)


//Comparison operators == === != !== > < >= <= ?-> Ternary operator/

console.log("'text' === 1", 'text' === 1)
console.log("'1' === 1 type and value", '1' === 1)
console.log("'1' == 1 value", '1' == 1)

console.log(studentInfo.age >= 18 ? 'He is eligibble to drink' : 'He is not eligibble to drink')

console.log('CA'.toLowerCase() < 'cb')
console.log('a' > 'b')

//Logical operators && || !/

console.log('true && true && true', true && true && true)

console.log('true || false', true || false || false)
console.log('!true', !true)
let isPrimeNumber = false;
if (!isPrimeNumber) {
   console.log('not a prime number')
}

let array = [10, 20, 33, 55, 67, 87, 66]

// array[0]
// array[1]
//prime number and odd number






//camel case

//Pascal case

