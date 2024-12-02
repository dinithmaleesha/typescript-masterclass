// extending interfaces

interface HasFormatter {
    format(): string
}

interface Bill extends HasFormatter {
    id: string | number,
    amount: number,
    server: string
}

const user = {
    id: 1,
    format(): string {
        return `This user has an id of ${this.id}`
    }
}

const bill = {
    id: 2,
    amount: 50,
    server: 'Mario',
    format(): string {
        return `Bill with id ${this.id} has $${this.amount}`
    }
}


function printFormatted(val: HasFormatter): void {
    console.log(val.format())
}

function printBill(bill: Bill): void {
    console.log('Server', bill.server);
    console.log(bill.format());
}

printFormatted(user)
printFormatted(bill)

// printBill(user)
printBill(bill)

