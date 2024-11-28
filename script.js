// Select elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Function to add a new task
function addTask() {
  const taskText = todoInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create task item
  const todoItem = document.createElement("li");
  todoItem.className = "todo-item";

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";

  // Mark task as completed on click
  taskSpan.addEventListener("click", () => {
    todoItem.classList.toggle("completed");
  });

  // Delete task on click
  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(todoItem);
  });

  // Append task text and delete button to task item
  todoItem.appendChild(taskSpan);
  todoItem.appendChild(deleteBtn);

  // Append task item to the list
  todoList.appendChild(todoItem);

  // Clear input
  todoInput.value = "";
}

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task on Enter key press
todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
