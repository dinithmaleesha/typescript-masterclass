import { CSVWiter } from "./index"

interface Payment {
    id: number,
    amount: number,
    to: string,
    notes: string
}

const paymentsWriter = new CSVWiter<Payment>(['id', 'amount', 'to', 'notes'])

paymentsWriter.addRows([
    { id: 1, amount: 50, to: 'Yoshi', notes: 'for design work' },
    { id: 2, amount: 40, to: 'Dinith', notes: 'for web work' },
    { id: 3, amount: 30, to: 'Maleesha', notes: 'for dev work' },
])

paymentsWriter.save('./data/payments.csv')