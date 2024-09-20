// Variables
const taskList = document.querySelector("#task-list");
var listOfTasks = [];
var taskID = 0;

if (listOfTasks.length <= 0) {
   taskList.innerHTML = "<li><b>Empty...</b></li>";
}

// Create a new task
document.querySelector('#new-task').onclick = () => {
   // Prompt
   let theTask = window.prompt('Digit your task:');
   
   // Verify if the task is valid
   if (theTask) {
      // Create a new task
      taskID++;
      let li = document.createElement('li');
      li.innerHTML = theTask;
      li.classList.add('appended-Task');

      // Append the new task
      taskList.appendChild(li);

      let listChildren = taskList.children;
      if (listChildren.length >= 1) {
         // Nothing yet
      }
   } else {
      // In case of prompt error
      window.alert('Oh no, please digit a valid task!');
   }
}
