const audio = new Audio ('https://www.melodyloops.com/tracks/formula-for-success/');
audio.loop = true;
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
    console.log(alarmTime); 
}

//Setting the alarm
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

//To clear the alarm and to pause the alarm sound
function clearAlarm () {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout (alarmTimeout);
        alert('Alarm Cleared'); 
    }
}





