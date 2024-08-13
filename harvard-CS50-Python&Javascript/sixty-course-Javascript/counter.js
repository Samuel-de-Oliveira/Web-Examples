var countVar = 0;

// Counting application
document.getElementById("thebutton").onclick = function() {
   countVar = countVar + 1;
   console.log(countVar);

   var thetitle       = document.getElementById("titulo");
   thetitle.innerHTML = "Great, keep going!";
   
   var thebutton       = document.getElementById("thebutton");
   thebutton.innerHTML = "Value: " + countVar;
}
