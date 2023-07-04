// const numbers = [1, 2, 2, 2, 2, 3, 2, 1, 2, 3, 3, 3];

// const findMaxCount = (arr) => {
//    let frequency = {};
//    let maxCount = 0;
//    let maxFrequentElement;

//    numbers.forEach((num) => {
//       if (frequency[num]) {
//          frequency[num]++;
//       } else {
//          frequency[num] = 1;
//       }



//       // if (frequency[num] > maxCount) {
//       //    maxCount = frequency[num];
//       //    maxFrequentElement = num;
//       // }


//    })



//    console.log(frequency)

//    console.log(maxFrequentElement + ' is the most frequent element');
//    console.log(Object.keys(frequency))
//    // console.log(Object.values(frequency))

// }

// let firstName = 'firstName';


// // findMaxCount(numbers);

// // dom

// // // Get element by id

// // console.log(document.getElementById("cont"));

// // // Get elements by class name
// // console.log(document.getElementsByClassName("container"))


// // // Get elements by tag name
// // console.log(document.getElementsByTagName("p"))


// // // query selector
// // console.log(document.querySelector(".cont"))


// //object destructuring
// let { ab, b, c } = {
//    ab: 1,
//    b: 2
// }

// console.log(ab, b, c)

// let obj = {
//    firstName: 'test',
//    lastName: 'test2'
// }


// // for (let o in obj) {
// //    console.log('obj', o, obj[o])

// // }


// //array destructuring

// const abc = [200, 101, 5, 6, 8];

// // console.log()
// abc.sort((a, b) => {
//    return a - b;
// })
// // // query selector
// // console.log(document.querySelectorAll("p"))

// // const container = document.querySelector("#container");
// // container.style.backgroundColor = "red";
// // container.style.width = '200px';
// // container.style.height = '400px';

// // const string = 'madam test';
// // console.log(string.split("").reverse().join(""))


// const { movies } = {
//    "movies": [
//       {
//          "title": "Movie A",
//          "year": 2022,
//          "genres": [
//             {
//                "name": "Genre X",
//                "classification": {
//                   "main": "Action",
//                   "sub": ["Thriller", "Adventure"]
//                }
//             },
//             {
//                "name": "Genre Y",
//                "classification": {
//                   "main": "Drama",
//                   "sub": ["Romance"]
//                }
//             }
//          ],
//          "actors": [
//             {
//                "name": "Actor 1",
//                "role": "Protagonist"
//             },
//             {
//                "name": "Actor 2",
//                "role": "Antagonist"
//             }
//          ]
//       },
//       {
//          "title": "Movie B",
//          "year": 2019,
//          "genres": [
//             {
//                "name": "Genre Z",
//                "classification": {
//                   "main": "Science Fiction",
//                   "sub": ["Thriller"]
//                }
//             },
//             {
//                "name": "Genre W",
//                "classification": {
//                   "main": "Mystery",
//                   "sub": ["Suspense"]
//                }
//             }
//          ],
//          "actors": [
//             {
//                "name": "Actor 3",
//                "role": "Main Character"
//             },
//             {
//                "name": "Actor 4",
//                "role": "Supporting Character"
//             }
//          ]
//       }
//    ]
// }
// function checkGenre(g) {

//    const filteredMovie = movies.filter(({ genres }) => {
//       const data = genres.filter(({ classification }) => {
//          return classification.sub.includes(g);

//       })
//       return data.length > 0;

//    })
//    console.log(filteredMovie)
// }

// checkGenre("Romance")



//Mouse -> Click event

const submitBTN = document.querySelector("#submit-btn");

submitBTN.addEventListener("click", async (event) => {
   event.preventDefault();
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
   if (email === '') {
      document.querySelector('span').innerHTML = 'Please ente a email'
   }
   const reponse = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
         username: email,
         password
      })
   })

   const data = await reponse.json();

   console.log(data)

})







