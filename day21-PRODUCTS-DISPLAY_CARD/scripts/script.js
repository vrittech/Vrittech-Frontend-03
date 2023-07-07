let backendProds = []
const getProducts = async () => {
   try {
      const response = await fetch('https://dummyjson.com/products');
      const { products } = await response.json();
      return products;
   } catch (error) {
      console.log(error)
      return error;
   }
}


getProducts().then((prods) => {
   backendProds = prods;
   filteredProds(prods);
}).catch((error) => {
   console.log(error);
})

function filteredProds(backendProds) {
   document.getElementById("container").innerHTML = "";
   backendProds.forEach((prod) => {

      //create main div to append images and body
      const mainDiv = document.createElement("div");
      mainDiv.className = "card";
      mainDiv.style.width = "30%"
      //create image dynamically from prod, thumbnail consists of image link for src in image
      const image = document.createElement("img");
      image.className = "card-img-top";
      image.className = "h-75";
      image.src = prod.thumbnail;
      //create div for card-body
      const cardBodyDiv = document.createElement("div");
      cardBodyDiv.className = "card-body";
      //create a card title
      const cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.innerText = prod.title;

      //append card title in card body
      cardBodyDiv.appendChild(cardTitle);

      const cardP = document.createElement("p");
      cardP.className = "card-text";
      cardP.innerText = prod.description.length > 30 ? prod.description.slice(0, 30) + '...' : prod.description;
      cardBodyDiv.appendChild(cardP);

      const viewDetailsBtn = document.createElement("button");
      viewDetailsBtn.classList.add('btn', 'btn-primary', 'btn-sm');
      viewDetailsBtn.innerText = "View Details";
      viewDetailsBtn.setAttribute('data-bs-toggle', 'modal')
      viewDetailsBtn.setAttribute('data-bs-target', '#viewDetailModal')
      viewDetailsBtn.addEventListener('click', (e) => {
         e.preventDefault();
         document.getElementById('card-detail-img').src = prod.thumbnail;
         document.getElementById('prod-detail-name').value = prod.title;
         document.getElementById('prod-detail-desc').value = prod.description;
      })

      const editBtn = document.createElement("button");
      editBtn.classList.add('btn', 'btn-secondary', 'btn-sm', 'ms-2');
      editBtn.innerText = "Edit";

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'ms-2');
      deleteBtn.innerText = "Delete";
      deleteBtn.addEventListener('click', (e) => {
         e.preventDefault();
         backendProds = backendProds.filter((val) => {
            return val.id !== prod.id;
         })
         filteredProds(backendProds);
      })

      cardBodyDiv.appendChild(viewDetailsBtn);
      cardBodyDiv.appendChild(editBtn);
      cardBodyDiv.appendChild(deleteBtn);
      //append image first in main card div
      mainDiv.appendChild(image);
      mainDiv.appendChild(cardBodyDiv);

      document.getElementById("container").appendChild(mainDiv)
   })
}

function addProd(e) {
   e.preventDefault();
   const title = document.getElementById('prod-name').value;
   const thumbnail = document.getElementById('prod-img').value;
   const description = document.getElementById('prod-desc').value;

   const data = { id: Date.now(), title, thumbnail, description };

   const newProds = [data, ...backendProds];

   filteredProds(newProds);
   document.getElementById('btn-close').click()
}

