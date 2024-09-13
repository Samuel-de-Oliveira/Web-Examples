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
      li.id = `t${taskID}`;
      listOfTasks.push(li);

      // Update task list
      taskList.innerHTML = "";
      for (let i = 0; i < listOfTasks.length; i++) {
         console.log(listOfTasks);
         listOfTasks[i].onclick = () => {
            taskList.removeChild(
               document.querySelector(`#${listOfTasks[i].id}`)
            );
            for (let i = 0; i < listOfTasks.length; i++) {
               if (listOfTasks[i].id == listOfTasks[i].id) {
                  delete listOfTasks[i]
               }
            }
             listOfTasks = listOfTasks.filter(function (el) {
               return el != null;
            });
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
