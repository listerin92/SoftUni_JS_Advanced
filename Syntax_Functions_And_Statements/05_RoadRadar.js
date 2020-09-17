function RoadRadar(arr){
    let speed = parseInt(arr[0]);
    let area = arr[1];
    if (area === 'motorway'){
        CheckSpeeding(130);
    }
    else if(area === 'interstate'){
        CheckSpeeding(90);
    }
    else if(area === 'city'){
        CheckSpeeding(50);
    }
    else if(area === 'residential'){
        CheckSpeeding(20);
    }

    function CheckSpeeding(limit) {
        let diff = speed - limit;
        if (speed <= limit) {
            console.log('');
        }
        else if (diff <= 20) {
            console.log('speeding');
        }
        else if (diff > 20 && diff <= 40) {
            console.log('excessive speeding');
        }
        else if (diff > 40) {
            console.log('reckless driving');
        }
    }
}
RoadRadar([200, 'motorway']);