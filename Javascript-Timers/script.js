//SET Timeout and set interval



const ingridents =["olives","spinach"];

const pizzaTimer =setTimeout((ing1,ing2) => console.log(`Here is ur pizza with ${ing1} and ${ing2}`),3000,...ingridents);

console.log('waiting...')

if(ingridents.includes("spinach")) clearTimeout(pizzaTimer);


//setInterval

setInterval(function(){
    const now = new Date();
    console.log(now);
},5000);