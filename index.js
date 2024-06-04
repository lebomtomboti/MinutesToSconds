//MinutesToSeconds//
let input = document.querySelector("input");
let button = document.querySelector("button");
let span = document.querySelector("span");

button.addEventListener("click",MinutesToSeconds)
function MinutesToSeconds (){
    span.innerHTML= input.value * 60
}


