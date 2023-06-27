
function reverseValue(value) {
   let str;
   if (typeof value === 'number') {

      str = value.toString();

   } else {
      str = value;
   }
   const length = str.length;

   let reversedString = '';

   for (let i = length - 1; i >= 0; i--) {
      reversedString = reversedString + str[i];
   }
   let obj = {
      oriStr: str,
      revStr: reversedString
   }
   return obj;
}
//arrow function
const findPalidrome = (reversedString, str) => {
   if (reversedString === str) {
      console.log(str, 'It is a palindrome str')
   } else {
      console.log(str, 'Not palindroms')
   }
}

// let data = reverseValue('masdadsadam2');


// findPalidrome(data.revStr, data.oriStr);

//Higher order array methods - forEach, map, filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const data = numbers.forEach((a, index) => {
   if (a % 2 === 0) return `${a} even`;
})



// reverseValue('abccba');
// reverseValue('dab');
// reverseValue('test');
// reverseValue(12221);

// function test() {
//    console.log('abc')
//    return {
//       id: 1
//    }
// }

// const data = test();

// if (data.id == '1') {
//    console.log('odd numer')
// }


//Functions -> Specific set of solution to a problem
