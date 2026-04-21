let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      <span style="cursor:pointer; ${task.done ? 'text-decoration: line-through;' : ''}"
        onclick="toggleTask(${index})">
        ${task.text}
      </span>

      <button onclick="deleteTask(${index})">
        ❌
      </button>
    `;

    list.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value === "") {
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
