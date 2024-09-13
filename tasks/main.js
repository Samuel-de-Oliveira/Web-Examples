// Variables
const taskList = document.querySelector("#task-list");
var listOfTasks = {};
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
      listOfTasks[`value${taskID}`] = li;
      
      // Add remove proprety
      li.onclick = () => {
         //TODO: Fix the removing event
         let ThisTaskID = taskID
         taskList.removeChild(li);
         delete listOfTasks[`value${ThisTaskID}`] 
      }

      // Update task list
      taskList.innerHTML = "";
      for (let i = 0; i < Object.keys(listOfTasks).length; i++) {
        taskList.appendChild(
           listOfTasks[Object.keys(listOfTasks)[i]]
        );
      }
   } else {
      // In case of prompt error
      window.alert('Oh no, please digit a valid task!');
   }
}
