const button = document.querySelector(".button");
const display = document.querySelector(".display");
let number = 0;
button.addEventListener("click",function(){
    number++;
    display.textContent = number;
});
