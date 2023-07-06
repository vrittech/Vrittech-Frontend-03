
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
   prods.forEach((prod) => {
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

      const btn = document.createElement("button");
      btn.classList.add('btn', 'btn-primary');
      btn.innerText = "View Details";
      cardBodyDiv.appendChild(btn);
      //append image first in main card div
      mainDiv.appendChild(image);
      mainDiv.appendChild(cardBodyDiv);

      document.getElementById("container").appendChild(mainDiv)
   })
}).catch((error) => {
   console.log(error);
})

