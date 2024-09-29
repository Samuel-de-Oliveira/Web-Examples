export function emptyBlock() {
   let empty = document.createElement('li');
   empty.innerHTML = '<b>Empty...</b>';
   empty.id = 'empty';

   return empty
}

export function taskBlock(text) {
   let task = document.createElement('li');
   task.innerHTML = text;
   task.classList.add('appended-Task') 
} 
