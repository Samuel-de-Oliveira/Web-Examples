// Show page function
function showPage(page) {
   // First, hide all the pages
   document.querySelectorAll('div').forEach( (div) => {
      div.style.display = 'none';
   });

   // Then show only the chosed page
   let thePage = document.querySelector(`#${page}`);
   thePage.style.display = 'block';
}

// Add the showPage() function for all the buttons
document.querySelectorAll('button').forEach( (button) => {
   button.onclick = () => {
      showPage(button.dataset.page);
   }
});

let page1 = document.querySelector('#page1');
page1.style.display = 'block';
