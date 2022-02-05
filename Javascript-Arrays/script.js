// Working with arrays
// Array methods


let arr =['a','b','c','d','e'];

//Slice Method

console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(1,-2));

//SPLICE

// console.log(arr.splice(2));

arr.splice(-1);
arr.splice(1,2);
console.log(arr);

// REVERSE

arr =['a','b','c','d','e'];

const arr2 =['j','i','h','g','f'];

console.log(arr2.reverse());
console.log(arr2);

//CONCAT

const letters = arr.concat(arr2);
console.log(letters);

console.log([...arr , ...arr2]);

//JOIN

console.log(letters.join('-'));


//NEW METHOD

const arrNew =[23,11,64];

console.log(arrNew[0]);
console.log(arrNew.at(0));


// Getting last array element
console.log(arrNew[arrNew.length -1]);
console.log(arrNew.slice(-1));
console.log(arrNew.at(-1));


//FOREACH

const movements =[200 , 450 , -400,3000,-650, -130,70,1300];

for(const [i, movement] of movements.entries())
{
  if(movement >0)
  {
    console.log(`${i}:You deposited as ${movement}`);
  }
  else{
    console.log(`${i}:You withdraw as ${Math.abs(movement)}`);
  }
}


console.log('-------------FOREACH-----');

movements.forEach(function(movement,index,array){
  if(movement >0)
  {
    console.log(`${index}:You deposited as ${movement}`);
  }
  else{
    console.log(`${index}:You withdraw as ${movement}`);
  }

})