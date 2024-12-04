"use strict";
// CSV writer project
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CSVWiter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(',') + '\n';
    }
    addRows(values) {
        let rows = values.map((v) => this.formatRow(v));
        this.csv += rows.join('\n');
        console.log(this.csv);
    }
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = '\n';
        console.log('File saved to ', filename);
    }
    formatRow(p) {
        return this.columns.map((col) => p[col]).join(',');
    }
}
const writer = new CSVWiter(['id', 'amount', 'to', 'notes']);
writer.addRows([
    { id: 1, amount: 50, to: 'Yoshi', notes: 'for design work' },
    { id: 2, amount: 40, to: 'Dinith', notes: 'for web work' }
]);
writer.save('./data/payments.csv');
