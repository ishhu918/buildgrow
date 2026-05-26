// 1. Add two numbers and print the result.
console.log(2+7)

console.log("-----------------------------");

// 2. Find the remainder when 25 is divided by 4.
console.log(25%4)

console.log("-----------------------------");

// 3. Find the square of a number using exponent operator.
console.log(2**2);

console.log("-----------------------------");

// 4. Increment a variable using `++`.
let a = 2;
a++;
console.log(a);

// avoid the below code that is b = b++ or use carefully accordingly
let b = 2
b = b++;
console.log(b); // but b value is now 3 but it will print 2 coz using of post increment where assigning 1st then increment that's why it prints the same value then it increment the value.

// pre increment
let aa = 2;
aa = ++aa;
console.log(aa);

let bb = 2;
++bb;
console.log(bb);

console.log("-----------------------------");

// 5. Decrement a variable using `--`.
// post decrement 
let x = 2;
x--;
console.log(x);

let y = 2
y = y--;
console.log(y);

// pre decrement
let xx = 2;
--xx;
console.log(xx);

let yy = 2;
yy = --yy;
console.log(yy);

console.log("-----------------------------");

// 6. Use `+=` operator to increase a variable by 20.
let z = 10;
z += 20;
console.log(z);

console.log("-----------------------------");

// 7. Compare two numbers using `>`, `<`, `>=`, `<=`.
let firstNum = 2;
let secondNum = 2;
console.log(firstNum > secondNum);
console.log(firstNum < secondNum);
console.log(firstNum >= secondNum);
console.log(firstNum <= secondNum);

console.log("-----------------------------");

// 8. Check if two values are strictly equal using `===`.
console.log("2" === 2 );
console.log(2 === 2 );

console.log("-----------------------------");

// 9. Compare `"10"` and `10` using both `==` and `===`.
console.log("2" == 2 );

console.log("-----------------------------");

// 10. Create two boolean variables and test `&&`, `||`, and `!`.
let t = true;
let f = false;
console.log(t && f);
console.log(t || f);
console.log(!t);