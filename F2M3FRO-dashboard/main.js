const startButton = document.getElementById("js--start");
const stopButton = document.getElementById("js--stop");
const resetButton = document.getElementById("js--reset")
let seconds = 0;
let minutes = 0;
let running = false;

const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minutesTimer");

let timer;

startButton.onclick = function(){
    if(running === true){ /*Als de stopwatch loopt niks doen*/ 
        return;
    } 

    running = true;
    timer = setInterval(function(){
        seconds = seconds + 1
        if (seconds === 60){
            minutes = minutes + 1
            minutesTimer.innerText = minutes;
            seconds = 0;
        }
        secondsTimer.innerText = seconds;
    }, 100); /*Dit is in mili seconde dus 1 seconde*/
};


stopButton.onclick = function(){
    clearInterval(timer);
    running = false;
};

resetButton.onclick = function(){
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    minutesTimer.innerText = minutes;
    secondsTimer.innerText = seconds;
};

/*hier begint de slider*/

const rangeValue = document.getElementById("js--rangeValue");
const slider = document.getElementById("js--slider");
const body = document.getElementById("js--body");
slider.value = 2;
rangeValue.innerText = slider.value + "x";

slider.oninput = function(){
    rangeValue.innerText  = slider.value + "x";
    body.style.fontSize = slider.value + "rem";
};

let data = {
    "text": "My man moet even weg komen van alle stress en zijn familie.",
    "img": "/img/rat.webp",
};

/*Dit is de inner text van de middle article*/
const text = document.getElementById("js--text");
text.innerText = data.text;

/*Hier is de IMG*/
const foto = document.getElementById("js--foto");
foto.src = 'img/rat.webp';