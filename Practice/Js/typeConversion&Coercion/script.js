// Convert the string "50" into a number.
let str = "50";
console.log(`the str type of is ${typeof(str)}`)
str = Number(str)
console.log(`Now the str type of is ${typeof(str)}`)


console.log("-----------------------------");


// Convert the number 100 into a string.
let number = 100;
console.log(`typeof number is ${typeof(number)}`);
number = String(number);
console.log(`typeof number is ${typeof(number)}`);


console.log("-----------------------------");


// Convert "true" into a boolean.
let strVal = "true";
console.log(`typeof strVal is ${typeof(strVal)}`);
strVal = Boolean(strVal)
console.log(`now the strVal typeof is ${typeof(strVal)}`);


console.log("-----------------------------");


// Check the output of: 
// "5" + 2
// "5" - 2
// true + 1

console.log('5' + 2);
console.log("5" - 2);
console.log(true+1);
console.log("5" * 2);


console.log("-----------------------------");


// Create a variable with value "123abc" and convert it into a number.
let dummyVal = "123abc";
console.log(`the typeof dummyVal is ${typeof(dummyVal)}`);
dummyVal = Number(dummyVal);
console.log(`Now the typeof dummyVal is ${typeof(dummyVal)}`);


console.log("-----------------------------");


// Use parseInt() on "500px".
let val = "500px";
let result = parseInt(val);

console.log(result);        // 500
console.log(typeof(result)); // number