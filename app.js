// Js code
// Picking the selectors to be available in our JS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Add Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// create function to create the to do

function addTodo(event) {
  //prevent the form from submitting
  event.preventDefault();

  // Create To do Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Creeate Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  // clear todo input value
  todoInput.value = "";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // Check Mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class= "fas fa-check">';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Check Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash">';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append to the list
  todoList.appendChild(todoDiv);
}

// delete todolist
function deleteCheck(e) {
  const item = e.target;
  // Delete the todo button by clicking the trash btn
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //checkmark area
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
