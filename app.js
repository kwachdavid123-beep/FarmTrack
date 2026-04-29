let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
function renderTasks(){const list=document.getElementById("taskList");list.innerHTML="";
tasks.forEach((task,i)=>{const li=document.createElement("li");
li.innerHTML=`${task} <button onclick="completeTask(${i})">Done</button>`;
list.appendChild(li);});}
function addTask(){const t=prompt("Enter task");if(t){tasks.push(t);saveTasks();}}
function completeTask(i){tasks.splice(i,1);saveTasks();}
function saveTasks(){localStorage.setItem("tasks",JSON.stringify(tasks));renderTasks();}
renderTasks();