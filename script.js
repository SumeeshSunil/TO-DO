// Create a task Array
let tasks = [];

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
    console.log(tasks);
    }
}

