const SERVER_URL = 'http://localhost:8085/users/register';
// method:post
// body:
// {
//    fullName:"Nirajan Kunwor",
//    email:"nk@gmail.com",
//    password:"Test1234"
// }

const signup = async (e) => {
   e.preventDefault();
   const fullName = document.getElementById("full-name").value;
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;

   const data = {
      fullName,
      email,
      password
   }


   const response = await fetch(SERVER_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
         "Content-Type": 'application/json'
      }
   })

   const resp = await response.json();

   if (resp.status) {
      document.getElementById('error-msg').innerText = "";
      window.location.href = 'index.html';
   } else {
      document.getElementById('error-msg').innerText = resp.message;
   }


}