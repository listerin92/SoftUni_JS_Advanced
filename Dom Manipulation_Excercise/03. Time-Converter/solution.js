function attachEventsListeners() {
    //One day is equal to 24 hours/1440 minutes/86400 seconds

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let daysBtn = document.getElementById('daysBtn');
    daysBtn.addEventListener('click', () => {

        hours.value = Number(days.value) * 24;
        minutes.value = days.value * 1440;
        seconds.value = days.value * 86400;
    });

    let hoursBtn = document.getElementById('hoursBtn');
    hoursBtn.addEventListener('click', () => {

        days.value = hours.value / 24;
        minutes.value = days.value * 1440;
        seconds.value = days.value * 86400;
    });

    let minutesBtn = document.getElementById('minutesBtn');
    minutesBtn.addEventListener('click', () => {

        days.value = minutes.value / 1440;
        hours.value = days.value * 24;
        seconds.value = days.value * 86400;
    });

    let secondsBtn = document.getElementById('secondsBtn');
    secondsBtn.addEventListener('click', () => {

        days.value = seconds.value / 86400;
        hours.value = days.value * 24;
        minutes.value = days.value * 1440;

    });


}