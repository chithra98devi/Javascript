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

//287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);


const priceCents = 345_99;
console.log(priceCents);


const transferedFee1 = 15_00;
const transferedFee2 = 1_500;


const PI = 3.14_15;
console.log(PI);

console.log(Number('230000'));


//Big int

console.log(54657687687989809090909986n);

console.log(BigInt(54657687687989809090909986));

//operation

console.log(10000n + 10000n);


//Exceptions

console.log(20n > 15);
console.log(20n === 15);
console.log(20n == '20');

//Creating dates and times
//create date

const now = new Date();

console.log(now);

console.log(new Date('December 24, 2015'));
console.log(new Date(2037,10,19,15,23,5));
console.log(new Date(2037,10,31));


console.log(new Date(0));
console.log(new Date(3*24*60*60*1000));


//working with dates

const future = new Date(2037,10,19,15,23,5);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142285785000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);


//calculating dates

const future1 = new Date(2037,10,19,15,23,5);

console.log(Number(future1));

const calcDaysPassed = (date1 , date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 =calcDaysPassed(new Date(2037,3,14), new Date(2037,3,24));

console.log(days1);


// Internationalization with dates

const num = 3884764.23;

const options ={
    style: 'currency',
    unit : 'celsius',
    currency:'EUR',
    // useGrouping:false
}

console.log('US',new Intl.NumberFormat('en-US',options).format(num));
console.log('germany',new Intl.NumberFormat('de-DE').format(num));

console.log(navigator.language, new Intl.NumberFormat(navigator.language).format(num));
