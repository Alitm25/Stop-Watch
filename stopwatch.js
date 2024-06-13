/// times 
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const miliSecond = document.querySelector('.mili-second');

/// controll buttons
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

/// Time values
let miliSec = '00';
let sec = '00';
let min = '00';
let Hour = '00';

let intervallId;
/// prevent from looping the setintervall
let isStopWatchStart;

function start() {
    intervallId = setInterval( () => {

        if (miliSec === 99) {
            miliSec = '00';
            sec++;
        } 

        if (sec === 60) {
            sec = '00';
            min++;
        }

        if (min === 60) {
            min = '00';
            Hour++;
        }
        miliSec++;
        miliSecond.innerHTML = miliSec;
        second.innerHTML = sec;
        minute.innerHTML = min;
        hour.innerHTML = Hour;
        
    }, 10);

    isStopWatchStart = true;
}

startButton.addEventListener('click', () => {
    if (!isStopWatchStart) {
        start();
    } else {
        return;
    }

});

stopButton.addEventListener('click', () => {
    stop();
});

resetButton.addEventListener('click', () => {
    stop();
    miliSec = '00';
    sec = '00';
    min = '00';
    Hour = '00';

    miliSecond.innerHTML = '00';
    second.innerHTML = '00';
    minute.innerHTML = '00';
    hour.innerHTML = '00';


})

function stop() {
    isStopWatchStart = false;
    clearInterval(intervallId);
}
