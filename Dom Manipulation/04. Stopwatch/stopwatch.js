function stopwatch() {

    const watch = document.getElementById('time');
    let startButton = document.getElementById('startBtn');
    let stopButton = document.getElementById('stopBtn');


    startButton.addEventListener('click', timer);
    stopButton.addEventListener('click', reset);

    let [seconds, minutes] = [0, 0]
    let timeout

    function timer() {
        watch.textContent = "00:00"
        startBtn.disabled = true
        stopBtn.disabled = false
        timeout = setInterval(add, 1000)
    }
    function add() {
        seconds++
        if (seconds >= 60) {
            seconds = 0
            minutes++
        }

        watch.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")
            + ":" + (seconds > 9 ? seconds : "0" + seconds)
    }


    function reset() {
        startBtn.disabled = false
        stopBtn.disabled = true
        clearInterval(timeout)
        seconds = 0
        minutes = 0
        console.log(watch.textContent);
    }


}