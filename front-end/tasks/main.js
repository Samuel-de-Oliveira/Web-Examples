// Variables
const taskList = document.querySelector("#task-list");
var listOfTasks = [];
var taskID = 0;

// Create <b>Empty...</b>
if (listOfTasks.length <= 0) {
   taskList.innerHTML = "<li id=\"empty\"><b>Empty...</b></li>";
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

      // Clean the <b>Empty...</b>
      if (taskList.children.length >= 1) {
         try {
            document.querySelector('#empty').remove()
         } catch {
            // Nothing yet
         }
      }

      // Append the new task
      taskList.appendChild(li);

      // Add remove function
      let allTasks = document.querySelectorAll(".appended-Task").forEach(
         element => {
            element.onclick = () => {
               // Remove element
               element.remove();

               // Add a <b>Empty..</b> when list is equals to zero
               if (taskList.children.length <= 0) {
                  taskList.innerHTML = `<li id="empty"><b>Empty...</b></li>`;
               }
            }
         }
      );

   } else {
      // In case of prompt error
      window.alert('Oh no, please digit a valid task!');
   }
}
