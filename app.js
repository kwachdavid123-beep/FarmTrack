let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="completeTask(${index})">Done</button>`;
    list.appendChild(li);
  });
}

function addTask() {
  const task = prompt("Enter task (e.g. Feed Batch A)");
  if (task) {
    tasks.push(task);
    saveTasks();
  }
}

function completeTask(index) {
  tasks.splice(index, 1);
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

renderTasks();