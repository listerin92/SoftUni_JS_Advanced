class Parking {
    vehicles = [];
    constructor(capacity) {
        this.capacity = capacity;
        //this.vehicles = new Array(capacity);
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length >= this.capacity) {
            throw new Error("Not enough parking space.");
        }
        let car = {
            carModel,
            carNumber,
            payed: false,
        }
        this.vehicles.push(car);
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }
    removeCar(carNumber) {
        let foundCar = this.vehicles.find(car => car.carNumber == carNumber);
        if (!foundCar) {
            throw new Error("The car, you're looking for, is not found.");
        }
        if (!foundCar.payed) {
            throw new Error(`${foundCar.carNumber} needs to pay before leaving the parking lot.`);
        }
        this.vehicles = this.vehicles.filter((e) => { return e.carNumber !== carNumber }); //check TODO

        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let foundCar = this.vehicles.find(car => car.carNumber == carNumber);
        if (!foundCar) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        if (foundCar.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }
        foundCar.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;


    }
    getStatistics(carNumber) {
        let result = '';
        if (carNumber === undefined) {
            result += `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.\n`;
            this.vehicles = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            for (const vehicle of this.vehicles) {
                result += `${vehicle.carModel} == ${vehicle.carNumber} - ${vehicle.payed ? 'Has payed' : 'Not payed'}\n`;
            }
        } else {
            let foundCar = this.vehicles.find(car => car.carNumber == carNumber);
            result += `${foundCar.carModel} == ${foundCar.carNumber} - ${foundCar.payed ? 'Has payed' : 'Not payed'}\n`;
        }

        return result.trim();
    }

}

const parking = new Parking(2);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Aolvo t601", "TX3691Cb"));
console.log(parking.addCar("Colvo t602", "TX3691Cd"));
console.log(parking.pay("TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.removeCar("TX3691CA"));
console.log(parking.addCar("Aolvo t601", "TX3691Cb"));

