const array1 = [10, 1000, 0];

const findMaximumMinimumValue = (arr) => {
   let min = arr[0];
   let max = arr[0];
   arr.forEach((a) => {

      if (a < min) {
         min = a;
      }

      if (a > max) {
         max = a;
      }
   })

   // for (let i = 1; i < arr.length; i++) {
   //    if (arr[i] < min) {
   //       min = arr[i];
   //    }

   //    if (arr[i] > max) {
   //       max = arr[i];
   //    }
   // }
   // }
   return {
      min,
      max
   }
}

// const num = findMaximumMinimumValue(array1);

// console.log(`${array1}`)

// document.write(`${num.min} is the minimum num`)
// document.write(`${num.max} is the max num`)

//array methods
let array2 = [10, 1000, 0];

array2.push(30);

console.log(array2)
// let array2 = [10, 1000, 0];

array2.push(30);

console.log(array2)

array2.pop();
array2.pop();

console.log(array2)

array2.unshift('Hello world')

console.log(array2)

array2.shift()

array2.shift()

console.log(array2.length)

const newArray = [1, 2, 3, 4, 5, 6, 7]



const a = newArray.splice(2, 1, 9, 10)
console.log(newArray)
console.log(a)

let obj = {
   name: 'Nirajan'
}

delete obj["name"]

console.log(obj)
// const a = [1, 2, 3, 4];
let isInclude = false;
a.forEach((item) => {
   if (item === 5) {
      isInclude = true;
   }
})

const name = ['John', 'Test', 'aaaa', 'Hello', 'John', 'Test', 'aaaa', 'Hello']
//find duplicate value
function hasDuplicate(arr) {
   for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
         if (arr[i] === arr[j]) {
            return true;
         }

      }
   }
   return false;
}

hasDuplicate(name);



