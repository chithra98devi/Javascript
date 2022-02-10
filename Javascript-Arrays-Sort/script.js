const movements =[200 , 450 , -400,3000,-650, -130,70,1300];

// SORTING

//STRING
const owners =['Jonas','Zach','Adam','Martha'];

console.log(owners.sort());
console.log(owners);

// NUMBERS
// Return < 0 A,B
// Return > 0 B,A

//Ascending
// movements.sort((a,b) =>{
//   if(a > b) return 1;
//   if(a < b) return -1;
// })

movements.sort((a,b)=> a-b);

console.log(movements);


//Descending
// movements.sort((a,b) =>{
//   if(a > b) return -1;
//   if(a < b) return 1;
// })

movements.sort((a,b)=> b-a);
console.log(movements);


//Fill method

const arr =[1,2,3,4,5,6,7];

console.log(new Array(1,2,3,4,5,6,7));

//Empty array + fill method

const x = new Array(7);

x.fill(3,4,7);
x.fill(1);

console.log(x);

const y = Array.from({length : 7}, ()=>1);
console.log(y);

const z = Array.from({length : 7}, (cur,i)=>i+1);
console.log(z);
