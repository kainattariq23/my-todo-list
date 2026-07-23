const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {

    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const newTask = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskLabel = document.createElement("span");
    taskLabel.textContent = taskText;

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            taskLabel.style.textDecoration = "line-through";
        } else {
            taskLabel.style.textDecoration = "none";
        }
    });
   const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        newTask.remove();

    });
    newTask.appendChild(checkbox);
    newTask.appendChild(taskLabel);

    taskList.appendChild(newTask);

    taskInput.value = "";

});
