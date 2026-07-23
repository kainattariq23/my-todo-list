const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        const newTask = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        const taskLabel = document.createElement("span");
        taskLabel.textContent = task.text;

        if (task.completed) {
            taskLabel.style.textDecoration = "line-through";
        }

        checkbox.addEventListener("change", function() {

            task.completed = checkbox.checked;

            if (checkbox.checked) {
                taskLabel.style.textDecoration = "line-through";
            } else {
                taskLabel.style.textDecoration = "none";
            }

            saveTasks();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {

            tasks.splice(index, 1);

            saveTasks();
            displayTasks();

        });

        newTask.appendChild(checkbox);
        newTask.appendChild(taskLabel);
        newTask.appendChild(deleteButton);

        taskList.appendChild(newTask);

    });
}

addButton.addEventListener("click", function() {

    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const newTask = {
        text: taskText,
        completed: false
    };

    tasks.push(newTask);

    saveTasks();

    displayTasks();

    taskInput.value = "";

});

displayTasks();
// Display saved tasks when page loads
displayTasks();
