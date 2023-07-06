const SERVER_URL = 'http://localhost:8085/users/login';
const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener('click', async (e) => {
   e.preventDefault();
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;

   const data = {
      email: email,
      password: password
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
      document.getElementById('login-err').innerText = '';
      window.location.href = 'products.html';
   } else {
      document.getElementById('login-err').innerText = resp.message;
   }

})