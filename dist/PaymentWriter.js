"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const paymentsWriter = new index_1.CSVWiter(['id', 'amount', 'to', 'notes']);
paymentsWriter.addRows([
    { id: 1, amount: 50, to: 'Yoshi', notes: 'for design work' },
    { id: 2, amount: 40, to: 'Dinith', notes: 'for web work' },
    { id: 3, amount: 30, to: 'Maleesha', notes: 'for dev work' },
]);
paymentsWriter.save('./data/payments.csv');
