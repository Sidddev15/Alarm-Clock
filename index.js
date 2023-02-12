// const audio = document.getElementById("audioplay").scr;
// audio.loop = false;
//storing the date object of alarm that the user set
let alarmTime = null;
//storing the reference to store alarm so that we can clear the alarm when needed
let alarmTimeout = null;

//Display the clock
const timer = document.querySelector('.clock')
setInterval(() => {
timer.innerText = new Date().toLocaleTimeString()
}, 1000)

//Saving the date and the time provided by the user
function setAlarmTime(value) {
    alarmTime = value;
    // console.log(alarmTime); 
}

function setAlarm () {
    if (alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const Timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout (() => audio.play(), Timeout);
            alert('Alarm Set');
        }
    }
}

function clearAlarm () {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout (alarmTimeout);
        alert('Alarm Cleared');
    }
}





