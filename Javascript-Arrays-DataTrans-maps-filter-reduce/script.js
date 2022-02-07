const movements =[200 , 450 , -400,3000,-650, -130,70,1300];

///////////////////////////////////////
// The map Method
const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
const movementsUSD = movements.map(mov => mov * eurToUsd);


console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

//=======================================
//Filter Method
//=======================================

const deposits = movements.filter(function(mov){
  return mov>0;
});

console.log(movements);
console.log(deposits);

const depositsFor =[];

for (const mov of movements) if(mov >0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(function(mov){
  return mov < 0;
});

console.log(withdrawals);

const withdrawalNew = movements.filter(mov => mov < 0);
console.log(withdrawalNew);

//=======================================
//Reduce Method
//=======================================

//accumulator -> snowball
const balance = movements.reduce(function(acc,current, i, arr){
  console.log(`Iteration ${i}:${acc}`);
  return acc + current; 
},0)

console.log(balance);

//Arrow method

const balance3 = movements.reduce((acc,current)=> acc+current,0)

console.log(balance3);


let balance2 =0;

for(const mov of movements)balance2 += mov;
console.log(balance2);

//Max value

const max = movements.reduce((acc,mov)=>{
  if(acc > mov) return acc;
  else return mov;
},movements[0]);

console.log(max);
