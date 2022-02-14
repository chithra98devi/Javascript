// Number

console.log( 23 === 23.0);

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// convert string to numbers
console.log(Number('23'));
console.log(+"23");

//parsing

console.log(Number.parseInt('30px',10));
console.log(Number.parseInt('e23', 10));


console.log(Number.parseFloat('2.5rem'));
console.log(Number.parseInt('2.5rem'));



// console.log(parseFloat('2.5rem'));

//check if value is NaN 
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(23/0));


// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(23/0));


console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23/0));


// Math and rounding

console.log(Math.sqrt(25));
console.log( 25 ** (1/2));
console.log( 8 ** (1/3));

console.log(Math.max(5,18,23,11,2));
console.log(Math.max(5,18,'23',11,2));
console.log(Math.max(5,18,'23px',11,2));


console.log(Math.min(5,18,23,11,2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) +1);

const randomInt = (min,max) => Math.trunc(Math.random() * (max - min) +1) + min;

// 0..1 -> 0 ...(max - min) -> min...max

console.log(randomInt(10,20));


//Rounding integer

console.log(Math.round(23.3));
console.log(Math.round(23.9));


console.log(Math.ceil(83.3));
console.log(Math.ceil(83.9));

console.log(Math.floor(83.3));
console.log(Math.floor(83.9));

console.log(Math.trunc(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

//Rounding decimals

console.log((2.7).toFixed(0)); // Return string
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

//Remainder operator

console.log(5%2);
console.log(5/2); // 5=2*2+1


console.log(8%3);
console.log(8/3);

console.log(6%2);
console.log(6/2);


const isEven = n => n%2 ===0;

console.log(isEven(4));
console.log(isEven(23));
console.log(isEven(512));