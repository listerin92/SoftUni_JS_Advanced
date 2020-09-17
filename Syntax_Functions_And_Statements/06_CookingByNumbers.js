function Cooking(arr){
    let number = arr[0];
    let result = number;

    for (let i = 1; i <= 5; i++){
        
        let operator = arr[i];

        if (operator === 'chop'){
            result = result / 2;
        } else if (operator === 'dice'){
            result = Math.sqrt(result);
        } else if(operator === 'spice'){
            result = result + 1;
        } else if (operator === 'bake'){
            result = result * 3;
        } else if (operator === 'fillet'){
            let twentyPercent = 20/100;
            let toSubstract = result * twentyPercent;
            result = result - toSubstract;
        }
        console.log(result);

    }

}
Cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);