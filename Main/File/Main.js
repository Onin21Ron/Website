const menu = document.querySelector("#mobile");
const container = document.querySelector(".container");

menu.addEventListener('click', function() {    
    menu.classList.toggle('active');
    container.classList.toggle('active');
});