// const ul = document.createElement('ul');

// ul.className = "list-group";

// const container = document.getElementById("container");


// const list = document.createElement('li');

// list.className = "list-group-item";

// list.innerHTML = "Test"

// const h1 = document.createElement("h1");

// h1.textContent = "test";



// list.appendChild(h1);

// ul.appendChild(list);

// container.appendChild(ul);

// const a = document.querySelector("input").value;
// document.querySelector("input").className = "50";

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let todos = [];



todoForm.addEventListener("submit", (event) => {
   event.preventDefault();
   const todo = {
      id: Date.now(),
      name: todoInput.value,
      completed: false
   }

   todos.push(todo);
   displayTodos();
   todoForm.reset();

})

const displayTodos = () => {
   todoList.innerHTML = "";

   todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.classList.add("list-group-item", "d-flex", "justify-content-between");

      const div = document.createElement("div");

      const checkbox = document.createElement("input");

      //checkbox of the todo
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;
      checkbox.classList.add("form-check-input", 'me-2');

      checkbox.addEventListener("change", (e) => {
         e.preventDefault();
         todo.completed = e.target.checked;
         displayTodos();
      })


      //name of the todo
      const span = document.createElement("span");
      span.innerText = todo.name;
      span.classList.add("ms-2", `${todo.completed === true ? 'text-decoration-line-through' : 'none'}`);

      div.append(checkbox)
      div.append(span)

      li.append(div);

      //Edit and delete button
      const rightDiv = document.createElement("div");

      const editButton = document.createElement("button");
      editButton.classList.add("btn", "btn-primary", "btn-sm");
      editButton.innerText = "Edit";

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("btn", "btn-danger", "btn-sm", "ms-1");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", (e) => {
         e.preventDefault();
         todos = todos.filter((t) => {
            return todo.id !== t.id;
         })
         displayTodos();
      })

      rightDiv.append(editButton)
      rightDiv.append(deleteButton)
      li.setAttribute("key", index);
      li.appendChild(rightDiv);

      todoList.append(li);



   })
}



