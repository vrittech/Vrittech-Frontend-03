const array1 = [10, 1000, 0, 20];

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



