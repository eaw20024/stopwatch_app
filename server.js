const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

///////////////////////////////////////////////////////////////////////

//Prevents timer from being clicked twice after you start it
let isRunning = false;
//Starts timer at 00
let timerTime = 00;
let interval;

///////////////////////// Functions ////////////////////////////////

//Start the timer
function startTimer() {
    if (isRunning) return;
    isRunning = true;
    interval = setInterval(incrementTimer, 1000);

}

//Stop the timer
function stopTimer() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(interval);
}

//Reset the Timer
function resetTimer() {
    stopTimer();
    timerTime = 0;
    seconds.innerText = '00';
    minutes.innerText = '00';
}

//Increment the Stopwatch
function incrementTimer() {
    timerTime += 1;

    const numOfMinutes = Math.floor(timerTime / 60);
    const numOfSeconds = timerTime % 60;

    seconds.innerText = pad(numOfSeconds);
    minutes.innerText = pad(numOfMinutes);
}

//Adds Number in the form of a string to the Stopwatch 
function pad(number) {
    //Ternary Operator
    // return (number < 10) ? '0' + number : number;

    if (number < 10) {
        return '0' + number; 
    } else {
        return number;
    }
}

/////////////////////////// Event Listeners ///////////////////////////

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);