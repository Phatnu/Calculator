const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
//CALCULATOR FUNCTION
// function calculate(){
//     try{
//         display.value = eval(display.value);
//     }
//     catch(error){
//         display.value = "Error";
//     }
// }

//PRANK FUNCTION
function calculate(){
    try{
        display.value = "Miss na kita!";
        display.style.transition = "2s ease";
        display.style.color = "black";
        display.style.border = "2px solid black";
        display.style.textAlign = "center";
        display.style.fontSize = "2.5rem";
    }
    catch(error){
        display.value = "Error";
    }
}
//ADD SPEECH FOR CALCULATOR
let btn = document.getElementById("btnsounds");
let text = document.getElementById("display");
btn.addEventListener("click", () =>{
let utterance = new
SpeechSynthesisUtterance(text.value);
speechSynthesis.speak(utterance);
});
//MOVE BUTTON
let btn2 = document.getElementById("clr");
let position = 0;
btn2.addEventListener("mouseover", () => {
    position = position === 0 ? 200 : 0;
    btn2.style.transform = `translate(${position}px)`; // Change btn to btn2
});
