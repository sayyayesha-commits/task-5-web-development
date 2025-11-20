function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.className = "task";

    li.innerHTML = `
        <span>${taskText}</span>

        <div>
            <!-- Complete Icon -->
            <button class="icon-btn" onclick="markDone(this)">✅</button>

            <!-- Delete Icon -->
            <button class="icon-btn" onclick="deleteTask(this)">🗑️</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function markDone(button) {
    const task = button.parentElement.parentElement;
    task.classList.toggle("completed");
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}
