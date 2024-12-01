"use strict";
// tuples
let person = ['Mario', 2, true];
// tuples examples
let hsla;
hsla = [200, '100%', '50%', 1];
let xy;
xy = [23, 56];
function useCoors() {
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoors();
// named tuples
let user;
user = ['Mario', 22];
