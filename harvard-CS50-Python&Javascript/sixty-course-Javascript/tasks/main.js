let pageTitle = document.querySelector("title")

document.querySelector("#task").onclick = () => {
   let taskValue = window.prompt('Digit your task:')
   
   if (taskValue) {
      let newTask = document.createElement("div")
      newTask.innerHTML = taskValue
      newTask.classList.add("innerTask")

      let tasks = document.querySelector("#tasks")
      tasks.appendChild(newTask)
   } else {
      window.alert("Sorry, I can't place nothing...")
   }
}
