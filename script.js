// Create a task Array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function addTask () {
  let taskInput = document.getElementById("task");
  let text = taskInput.value;
  if ( text === ""){
    alert("Please enter a task");
    return;
  }else{
    tasks.push(text);
    taskInput.value = "";
    localStorage.setItem("tasks", JSON.stringify(tasks));
    let saved = localStorage.getItem("tasks");
    console.log(saved);
    }
}

