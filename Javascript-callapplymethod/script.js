///////////////////////////////////////
// Functions

const greet = function(greeting){
  return function(name){
    console.log(`${greeting} ${name}`);
  }
}


const greeterHey = greet('hey');
greeterHey('jonas');
greeterHey('steven');

greet('Hello')('Jonas');

// challenge

const greetArr = greeting => name =>console.log(`${greeting} ${name}`);

greetArr('hi')('chithra');

// this keyword

const indigo ={
  airline :'indigo',
  iataCode :'6E',
  bookings:[],

  book(flightNum , name){
    console.log(`${name} booked on seat ${this.airline} flight ${this.iataCode}${flightNum}`);

    this.bookings.push({flight: ` ${this.iataCode} ${flightNum}`, name});
  }

}

indigo.book(239,'chithra devi');
indigo.book(280,'meera');

console.log(indigo);

const goFirst ={
  airline: 'Gofirst',
  iataCode : 'G8',
  bookings:[],
}

const book = indigo.book;
// book(23, 'niladevi');

// call and apply method
//=======================
book.call(goFirst , 23 , 'niladevi');
console.log(goFirst);

const swiss ={
  airline : 'swiss air lines',
  iataCode : 'LX',
  bookings:[],
};

book.call(swiss,583, 'marry cooper');
console.log(swiss);


//Apply method

const flightData = [567,'George cooper'];
book.apply(swiss,flightData);

console.log(swiss);

book.call(swiss, ...flightData);

//Bind method
//===========
//book.call(goFirst , 23 , 'niladevi');

const bookGF = book.bind(goFirst);

bookGF(236,'stevejobs');

const bookGF23 = book.bind(goFirst ,23);
bookGF23('Jonas');

// with event listeners
//=====================

goFirst.planes =300;

goFirst.buyPlane = function(){
  console.log(this);

  this.plane++;
  console.log(this.planes);
}


// document.querySelector('.buy').addEventListener('click', goFirst.buyPlane.bind(goFirst));

// partial application

const addTax = (rate,value) => value + value * rate;
console.log(addTax(10,200));

const addVAT = addTax.bind(null,0.23);

console.log(addVAT(100));


const newTax = function(value){
  return function(rate){
    return value + value * rate;
  }
}

const finalAmount = newTax(200);
console.log(finalAmount(10));
