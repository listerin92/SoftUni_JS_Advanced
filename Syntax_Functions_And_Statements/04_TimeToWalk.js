
function TimeToWalk(steps, footprintInMeters, speedInKm){
    let distanceTraveled = steps * footprintInMeters;
    let studentRestMinutes = Math.floor(distanceTraveled / 500) * 60;
    let time = ((distanceTraveled / speedInKm) * 3.6 ) + studentRestMinutes;
    
    let seconds = Math.round(time % 60);
    let minutes = Math.floor(time / 60);
    if ((minutes / 60) % 1 === 0) minutes = 0;
    let hours = Math.floor(time / 3600);
    
    console.log(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`)
    
    function pad(num){
 
        if (num < 10) {
            return '0' + num;
        }
        else{
           return '' + num;
        }
    }
}

TimeToWalk(4000, 0.60, 5);