function asdf (...input){
    let fruit = input[0];
    let weightInGrams = input[1];
    let pricePerKg = input[2];
    let weight = weightInGrams /1000;
    let money = pricePerKg * weight;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}
asdf('apple', 1563, 2.35);