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

    newTask.textContent = taskText;

    taskList.appendChild(newTask);

    taskInput.value = "";

});
