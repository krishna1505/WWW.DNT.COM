let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);

        
})

 

function showMenu() {
    let dropdownMenu = document.getElementById('dropdown-menu');
    if (dropdownMenu.style.display === 'none') {
       dropdownMenu.style.display = 'block';
    } else {
       dropdownMenu.style.display = 'none';
    }
   }
   
   window.onmouseover = function(event) {
    if (!event.target.matches('.menu-icon')) {
       let dropdownMenu = document.getElementById('dropdown-menu');
       if (dropdownMenu.style.display === 'block') {
           dropdownMenu.style.display = 'none';
       }
    }
   }

   document.addEventListener('DOMContentLoaded', function() {
    var link = document.querySelector('a');
    link.addEventListener('click', function() {
        console.log('PDF download started...');
    });
});