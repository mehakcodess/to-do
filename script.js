let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
  <span class="task-text ${task.done ? 'done' : ''}" onclick="toggleTask(${index})">
    ${task.text}
  </span>

  <div>
    <button onclick="editTask(${index});">✏️</button>
    <button onclick="deleteTask(${index})">❌</button>
  </div>
`;

    list.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value.trim() === "") {
    alert("Enter a task");
    return;
  }

  tasks.push({ text: input.value, done: false });
  input.value = "";

  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

renderTasks();
function editTask(index) {
  let newText = prompt("Edit your task:", tasks[index].text);

  if (newText === null || newText.trim() === "") return;

  tasks[index].text = newText;
  renderTasks();
}
