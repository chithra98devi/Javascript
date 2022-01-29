///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


console.log(flights.split('+'));

for (const flight of flights.split('+')){
// console.log(flight.split(';'));

const [type , from, to,time ] = flight.split(';');

const output = `${type.startsWith('_Delayed')? '🔴' :''}${type.replaceAll('_',' ')} ${from.slice(0,3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} (${time.replace(':','h')})`.padStart(36);

console.log(output);

}