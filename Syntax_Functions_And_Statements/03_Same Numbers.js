function SameNumber(number){
    let sum =0;
    let isTrue = true;
    let str = number.toString();
    for(let i=0; i< str.length; i++){
        if (str[i] != str[i+1] && i< str.length-1){
            isTrue = false;
            
        }

        let digit = Number(str[i]);
        sum+=digit;

    }
    console.log(isTrue);
    console.log(sum);
}
SameNumber(1234);
