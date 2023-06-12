/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
//function addTwoNumbers(a, b) {
// Code Block
//return a + b;
//}
//let sum = addTwoNumbers(3, 5);
//console.log(sum);

// Arrow Function With Parameters ES6
const addTwoNumbers = (a, b) => {
    // Code Block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters ES6 Shorter Code
const addTwoNumbers3 = (a, b) => (a + b); //also valid
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);

// Implicit Returns = for simpler functions such as those that only take a single parameter
const saySomething = message => console.log(message);
saySomething('Hello there!!');

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        This is a multiline string!!
    </p>`
)
console.log(returnMultipleLines());