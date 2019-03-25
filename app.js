var firstName = 'Elyse';
const usStates = 50;
var addition = 5 + 4;

// Logs 9 to the console
console.log(addition);

// Creates alert "Hello World"
function sayHello() {
    alert("Hello World!");
  }
  sayHello()
  ;

// Creates check age function >21
function checkAge(name, age) {
        if (age >= 21) {
          return true;
        } else {
          return alert("Sorry " + name + ", you aren't old enough to view this page!");
        }
      }

// lets Charles view page, nothing happens
checkAge("Charles", 21);

// lets Abby view page, nothing happens
checkAge("Abby", 27);

// alerts James he cannot view page
checkAge("James", 18);

// alerts John he cannot view page
checkAge("John", 17);

//logs "Bok Choi" to the console
//logs "String Beans" to the console
//logs "Mushroom" to the console
//logs "Okra" to the console
let favoriteVegetables = {
    vegetable1: 'Bok Choi',
    vegetable2: 'String Beans',
    vegetable3: 'Mushroom',
    vegetable4: 'Okra'
};

for (let i in favoriteVegetables) {
    console.log(favoriteVegetables[i]);
}

//array of var 'people', contain name and age properties
var people = [{
  name: 'Will',
  age: 17
  }, {
    name: 'Bob',
    age: 32
  }, {
    name: 'Sarah',
    age: 19
  }, {
    name: 'Mary',
    age: 21
  }, {
    name: 'Jessica',
    age: 39
  }]

//executing function checkAge for array 'people'
for (let i=0; i < people.length; i++) {
let x = people[i].name
let y = people[i].age
checkAge (x, y);
}

//creates function getLength, expected output 'The world is an odd place'
function getLength (str) {
  return str.length;
}

var n = getLength('Hello World');

if ( n % 2 == 0) {
	console.log('The world is nice and even!');
}else{
	console.log('The world is an odd place!');
}