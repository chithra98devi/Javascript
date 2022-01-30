///////////////////////////////////////
// Functions

const bookings =[];

const createBooking = function(flightNum,numPassengers =1,price = 199*numPassengers)
{
  const booking ={
    flightNum,
    numPassengers,
    price
  }
  console.log(booking);
  bookings.push(booking);
  console.log(bookings);
}


createBooking('LH123');
createBooking('LH123',2);

// passing arguments 

const flight ='LH234';

const chithra ={
  name : 'chithra devi',
  passport:2346798909
}

const checkIn = function(flightNum, passenger){
  flightNum ='LH999';
  passenger.name ='Mr.' +passenger.name;

  if(passenger.passport === 2346798909)
  {
    alert('Checked in')
  }else{
    alert('Wrong passport');
  }
}

checkIn(flight, chithra)
console.log(flight);
console.log(chithra);


const newPassport = function(person)
{
  person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(chithra);
checkIn(flight , chithra);

//Functions accepting callback function

const oneWord = function(str){
  return str.replace(/ /g,'').toLowerCase();
}

const upperFirstWord = function(str){
  const [first , ...others] = str.split(' ');
  return[first.toUpperCase(), ...others].join(' ');
}

//Higher order function

const transformer = function(str, fn){
    console.log(`original string:${str}`);
    console.log(`Transformed string: ${fn(str)}`);

}

transformer('Javascript is the best!',upperFirstWord);
transformer('Javascript is the best!',oneWord);

//JS uses callback all the time

const high5 = function(){
  console.log('hi');
}
const names = ['chithra','devi','meera'];

names.forEach(high5);
