var taskList = document.querySelector("#task-list")

var listOfTasks = [] 

document.querySelector('#new-task').onclick = () => {
   var theTask = window.prompt('Your task:')
   
   if (theTask) {
      var li = document.createElement('li')
      li.innerHTML = theTask
      listOfTasks.push(li)

      taskList.innerHTML = ""
      for (let i = 0; i < listOfTasks.length; i++) {
        taskList.appendChild(listOfTasks[i])
      }
   } else {
      window.alert('Oh no, please digit a valid task!')
   }
}
