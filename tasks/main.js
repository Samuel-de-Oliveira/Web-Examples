// Variables
const taskList = document.querySelector("#task-list");
var listOfTasks = [];
var taskID = 0;

if (listOfTasks.length <= 0) {
   taskList.innerHTML = "<li><b>Empty...</b></li>";
}

// Create a new task
document.querySelector('#new-task').onclick = () => {
   let theTask = window.prompt('Your task:');
   
   if (theTask) {
      // Create a new task
      taskID++
      let li = document.createElement('li');
      li.innerHTML = theTask;
      listOfTasks.push(li);

      // Update task list
      taskList.innerHTML = "";
      for (let i = 0; i < listOfTasks.length; i++) {
         listOfTasks[i].onclick = () => {
            taskList.removeChild(listOfTasks[i])
            delete listOfTasks[i]
         }

         taskList.appendChild(
            listOfTasks[i]
         );
      }
   } else {
      // In case of prompt error
      window.alert('Oh no, please digit a valid task!');
   }
}
