
function addTask() {
    let taskInput = document.getElementById("task");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>`;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function editTask(button) {
    let li = button.parentElement;
    let newText = prompt("Edit task:", li.firstChild.textContent.trim());
    if (newText) li.firstChild.textContent = newText;
}

function deleteTask(button) {
    let li = button.parentElement;
    li.remove();
}

