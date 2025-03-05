var title = document.querySelector('#title');
var activated = false;

title.onclick = () => {
  if (activated) {
    activated    = false;
    title.className = "unvanish";
    console.log('Unvanished...');
  } else {
    activated    = true;
    title.className = "vanish";
    console.log('Vanished...');
  }
};
