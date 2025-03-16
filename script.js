"use strict";

const todosEl = document.getElementById("todos");
const formEl = document.querySelector("form");
const inputEl = document.getElementById("user-input");

const todos = [];

let todoCounter = 0;

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  // Creating every single todo element
  todos.push(createTodo(inputEl.value));

  // Return a template
  // todos.push(createTodoTemplate(inputEl.value));

  renderTodos(todos);

  inputEl.value = "";
});

function createTodo(todoText) {
  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todo");

  const checkboxContainer = document.createElement("div");
  checkboxContainer.classList.add("checkbox-container");

  const uniqueId = `todo-${todoCounter}`;

  const inputEl = document.createElement("input");
  inputEl.type = "checkbox";
  inputEl.id = uniqueId;

  const labelEl = document.createElement("label");
  labelEl.htmlFor = uniqueId;
  labelEl.appendChild(document.createTextNode(todoText));

  const buttonEl = document.createElement("button");
  buttonEl.classList.add("delete-todo");

  const iconEl = document.createElement("ion-icon");
  iconEl.setAttribute("name", "trash-sharp");
  iconEl.setAttribute("data-id", uniqueId);

  buttonEl.appendChild(iconEl);
  checkboxContainer.appendChild(inputEl);
  checkboxContainer.appendChild(labelEl);
  todoContainer.appendChild(checkboxContainer);
  todoContainer.appendChild(buttonEl);

  todoCounter++;

  return todoContainer.outerHTML;
}

function renderTodos(todos) {
  if (todos.length > 0) {
    todosEl.innerHTML = todos.map((todo) => todo).join("");
  }
}

// function createTodoTemplate(todoText) {
//   const uniqueId = `todo-${Date.now()}`;

//   return `<div class="todo">
//             <div class="checkbox-container">
//               <input type="checkbox" id="todo-${uniqueId}">
//               <label for="todo-${uniqueId}">${todoText}</label>
//             </div>
//             <button class="delete-todo">
//               <ion-icon name="trash-sharp"></ion-icon>
//             </button>
//           </div>`;
// }
