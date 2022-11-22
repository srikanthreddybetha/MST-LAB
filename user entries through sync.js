CODE:
// Importing the module
const prompt = require('prompt-sync')();

// Enter the number
a=prompt("Enter a number");
var number = [];
for (let i = 0; i < a; ++i) {
number.push(i);
}
console.log(number);


OUTPUT:
[0,1,2]
