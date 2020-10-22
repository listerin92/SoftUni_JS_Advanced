class Bank {

    allCustomers = [];
    transactions = [];

    #bankName;

    constructor(bankName) {
        this.#bankName = bankName;
    }

    newCustomer(customer) {
        //customer = {firstName, lastName, personalId}
        let exsitingCustomer = this.allCustomers.find(cst => cst.firstName == customer.firstName
            && cst.lastName == customer.lastName);
        if (exsitingCustomer) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        this.allCustomers.push(customer);

        return customer;
    }

    depositMoney(personalId, amount) {
        let existingCustomerId = this.existingCustomer(personalId);


        let transaction = `${existingCustomerId.firstName} ${existingCustomerId.lastName} made deposit of ${amount}\$!`;

        if (!existingCustomerId.totalMoney) {
            existingCustomerId.totalMoney = 0;
        }

        existingCustomerId.totalMoney += Number(amount);

        if (!existingCustomerId.transactions) {
            existingCustomerId.transactions = [];
        }

        existingCustomerId.transactions.push(transaction);

        return `${existingCustomerId.totalMoney}\$`;
    }

    withdrawMoney(personalId, amount) {
        let existingCustomerId = this.existingCustomer(personalId);

        if (existingCustomerId.totalMoney < amount) {
            throw new Error(`${existingCustomerId.firstName} ${existingCustomerId.lastName} does not have enough money to withdraw that amount!`);
        }

        existingCustomerId.totalMoney -= amount;

        let transaction = `${existingCustomerId.firstName} ${existingCustomerId.lastName} withdrew ${amount}\$!`;

        if (!existingCustomerId.transactions) {
            existingCustomerId.transactions = [];
        }

        existingCustomerId.transactions.push(transaction);

        return `${existingCustomerId.totalMoney}\$`;
    }

    customerInfo(personalId) {
        let customer = this.existingCustomer(personalId);
        let result = `Bank name: ${this.#bankName}`;
        result += `\n`;
        result += `Customer name: ${customer.firstName} ${customer.lastName}`;
        result += `\n`;
        result += `Customer ID: ${customer.personalId}`;
        result += `\n`;
        result += `Total Money: ${customer.totalMoney}\$`;
        result += `\n`;
        result += `Transactions:`;
        result += `\n`;
        for (let i = customer.transactions.length - 1; i >= 0; i--) {
            result += `${i + 1}. ${customer.transactions[i]}\n`;

        }

        return result.trim();
    }


    existingCustomer(personalId) {
        let existingCustomerId = this.allCustomers.find(customer => customer.personalId == personalId);
        if (!existingCustomerId) {
            throw new Error(`We have no customer with this ID!`);
        }
        return existingCustomerId;
    }

}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
