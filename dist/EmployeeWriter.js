"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const employeeWiter = new index_1.CSVWiter(['id', 'name', 'role', 'salary']);
employeeWiter.addRows([
    { id: 1, name: 'Dinith', salary: 50000, role: 'web dev' },
    { id: 2, name: 'Mario', salary: 35000, role: 'android dev' },
    { id: 3, name: 'Peach', salary: 68000, role: 'ui/ux' },
]);
employeeWiter.save('./data/Employee.csv');
