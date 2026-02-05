// Create a task Array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
 
console.log(JSON.parse(localStorage.getItem("tasks")));


const taskInput = document.getElementById("task");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", addTask);

clearBtn.addEventListener("click", () =>{
  tasks = [];
  localStorage.removeItem("tasks");
  displayTasks();
});

function addTask() {
  let text = taskInput.value.trim();

  if (text === "") {
    alert("Enter a task");
    return;
  }
  tasks.push(text);
  taskInput.value = "";
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
  console.log(tasks);
}

function displayTasks() {
  const list = document.getElementById("list");
  list.innerHTML = "";  

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";

    removeBtn.addEventListener("click", () => removeTask(index));

    li.appendChild(removeBtn);
    list.appendChild(li);
  });
}

function removeTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();

}
displayTasks();