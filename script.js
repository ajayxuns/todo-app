const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Add Task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    return;
  }
  const task = { text: taskText };
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";

  displayTasks();
}

// Delete Task
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

// Edit Task
function editTask(index) {
  const taskText = prompt("Edit task:", tasks[index].text);
  if (taskText !== null && taskText.trim() !== "") {
    tasks[index].text = taskText.trim();

    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
}

// Display Tasks
function displayTasks() {
  taskList.innerHTML = ""; // Clear the task list

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task.text}</span>
      <button class="edit-button" onclick="editTask(${index})">Edit</button>
      <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

// Initial Display
displayTasks();
