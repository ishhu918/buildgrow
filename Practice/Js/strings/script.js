// 1. Create a string and print its length.
let strVal = "hello world";
console.log(strVal);


console.log("-----------------------------");


// 2. Convert a string into uppercase.
let strUpper = "hello world";
console.log(strUpper);

// string is immutable so the result of this will be the original string value
// it will not print value in uppercase
strUpper.toUpperCase(); 
console.log(strUpper);

// so we have to  assign the variable
strUpper = strUpper.toUpperCase(); 
console.log(strUpper);


console.log("-----------------------------");


// 3. Convert a string into lowercase.
let strLower = "hELLo wOrlD";
console.log(strLower);

// string is immutable so the result of this will be the original string value
// it will not print value in uppercase
strLower.toLowerCase(); 
console.log(strLower);

// so we have to  assign the variable
strLower = strLower.toLowerCase(); 
console.log(strLower);


console.log("-----------------------------");


// 4. Check if a string includes the word `"JavaScript"`.
let strIncludes = "Javascript is a scripting langauge."
console.log(strIncludes.includes("JavaScript")); // .include() is a case senstive so it will show false
console.log(strIncludes.includes("Javascript"));



console.log("-----------------------------");


// 5. Extract the word `"World"` from `"Hello World"`.
let strExtract = "HEllo World";
console.log(strExtract.slice(6)); //H(0) e(1) l(2) l(3) o(4)  (5) W(6) o(7) r(8) l(9) d(10)
// or 
console.log(strExtract.slice(6,11)); 


console.log(strExtract.slice(11, 6)); // it will give emptty string
console.log(strExtract.slice(-5));  // allow -ve value


console.log(strExtract.substring(6, 11)); // World 
// substring(startIndex, endIndex)
console.log("hey " + strExtract.substring(-5)); // doesnot allow -ve value. wil give full string value without any error

console.log("substring " + strExtract.substring(11, 6)); // it will swap the value, or will give the value from right to left but in correct way. means it will not print the "dlrow" it will print in correct way "world".

// Note: real projects use slice 

console.log(strExtract.split(" ")[1]); // World 
// str.split(" "): ["Hello", "World"]
// ["Hello", "World"]
//    0         1

console.log("-----------------------------");


// 6. Replace `"apple"` with `"mango"` in a sentence.
console.log("-----------------------------");
// 7. Split `"HTML,CSS,JS"` into an array.
console.log("-----------------------------");
// 8. Remove extra spaces from a string.
console.log("-----------------------------");
// 9. Repeat the word `"Hi"` 5 times.
console.log("-----------------------------");
// 10. Print the first character of a string.
console.log("-----------------------------");
// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`