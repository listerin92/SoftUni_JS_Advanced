class VeterinaryClinic {
    clients = [];
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.currentWorkload = 0;
        this.totalProfit = 0;
    }
    getClient(ownerName) {
        let client = this.clients.find(x => x.ownerName == ownerName);

        return client;
    }

    getPet(owner, petName) {
        if (!owner) {
            return;
        }

        return owner.pets.find(x => x.petName == petName);
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.currentWorkload >= this.capacity) {
            throw new Error("Sorry, we are not able to accept more patients!");
        }

        // throw error when pet is already register 
        //"This pet is already registered under { ownerName } name! { petName } is on our lists, waiting for { all his procedures separated by ', ' }."
        let currentOwner = this.getClient(ownerName);
        let currentPet = this.getPet(currentOwner, petName);

        if (currentOwner && currentPet) {
            if (currentPet.procedures.length > 0) {
                throw new Error(`This pet is already registered under ${currentOwner.ownerName} name! ${currentPet.petName} is on our lists, waiting for ${currentPet.procedures.join(', ')}.`);
            } else {
                currentPet.procedures = procedures;
            }
        } else if (!currentOwner) {
            // current owner structure -> object owner with property name with array of objects pets
            currentOwner = {
                ownerName,
                pets: [],
            };
            this.clients.push(currentOwner);

        }
        //object pets
        currentOwner.pets.push({
            petName,
            kind,
            procedures,
        });

        this.currentWorkload++;


        // check if client exists
        return `Welcome ${petName}!`;
    }


    onLeaving(ownerName, petName) {
        let currentOwner = this.getClient(ownerName);

        if (!currentOwner) {
            throw new Error('Sorry, there is no such client!');
        }

        let currentPet = this.getPet(currentOwner, petName);

        if (!currentPet || currentPet.procedures.length == 0) {
            throw new Error(`SOrry, there are no procedures for ${petName}!`)
        }
        this.totalProfit += currentPet.procedures.length * 500;
        this.currentWorkload--;

        currentPet.procedures = [];

        return `Goodbye ${currentPet.petName}. Stay safe!`;

    }
    toString() {
        
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
//console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
//console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
//console.log(clinic.toString());
