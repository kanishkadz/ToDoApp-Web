// Get references to DOM elements
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Add a new task
addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText !== "") {
    const listItem = document.createElement("li");
    const taskSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");

    // Add task text
    taskSpan.textContent = taskText;
    taskSpan.addEventListener("click", () => {
      taskSpan.classList.toggle("completed");
    });

    // Add delete button
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      listItem.remove();
    });

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);
    todoList.appendChild(listItem);

    // Clear input field
    input.value = "";
  } else {
    alert("Please enter a task.");
  }
});
