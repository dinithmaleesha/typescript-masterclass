// CSV writer project

import { appendFileSync } from 'fs'

interface Payment {
    id: number,
    amount: number,
    to: string,
    notes: string
}

type PaymentColumns = ('id' | 'amount' | 'to' | 'notes') []

class CSVWiter {
    constructor(private columns: PaymentColumns) {
        this.csv = this.columns.join(',') + '\n'
    }

    private csv: string

    addRows(values: Payment[]): void {
        let rows = values.map((v) => this.formatRow(v))

        this.csv += rows.join('\n')

        console.log(this.csv)
    }

    save(filename: string):void {
        appendFileSync(filename, this.csv)
        this.csv = '\n'

        console.log('File saved to ', filename)
    }

    private formatRow(p: Payment): string {
        return this.columns.map((col) => p[col]).join(',')
    }
}

const writer = new CSVWiter(['id', 'amount', 'to', 'notes'])
writer.addRows([
    { id: 1, amount: 50, to: 'Yoshi', notes: 'for design work' },
    { id: 2, amount: 40, to: 'Dinith', notes: 'for web work' }
])

writer.save('./data/payments.csv')