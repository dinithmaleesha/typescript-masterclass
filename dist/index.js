"use strict";
// CSV writer project
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVWiter = void 0;
const fs_1 = require("fs");
class CSVWiter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(',') + '\n';
    }
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = '\n';
        console.log('File saved to ', filename);
    }
    addRows(values) {
        let rows = values.map((v) => this.formatRow(v));
        this.csv += rows.join('\n');
        console.log(this.csv);
    }
    formatRow(value) {
        return this.columns.map((col) => value[col]).join(',');
    }
}
exports.CSVWiter = CSVWiter;
