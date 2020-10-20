class VeterinaryClinic {
    clients = [];
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.currentWorkload = 0;
        this.totalProfit = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.currentWorkload >= this.capacity) {
            throw new Error("Sorry, we are not able to accept more patients!");
        }

        // throw error when pet is already register 
        //"This pet is already registered under { ownerName } name! { petName } is on our lists, waiting for { all his procedures separated by ', ' }."
        let currentOwner = this.clients.find(x => x.ownerName == ownerName);

        if (currentOwner && currentOwner.pets.any(x => x.petName == petName)) {
            throw new Error(`This pet is already registered under ${this.ownerName} name! ${this.petName} is on our lists, waiting for ${this.procedures.join(', ')}.`);
        }

        if (!currentOwner) {
            currentOwner = this.clients.push({
                ownerName,
                pets: [],
            });
            this.clients.push(currentOwner);

        }

        currentOwner.pets.push({
            petName,
            kind,
            procedures,
        });

        this.currentWorkload++;


        // check if client exists

    }
    onLeaving(ownerName, petName) {

    }
    toString() {

    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
// console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
// console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
// console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
// console.log(clinic.toString());
// clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
// console.log(clinic.toString());
