console.log(" Testing");

// Functions

function squareRootCalculator(x) {
  return x * x;
}
const result = squareRootCalculator(2);
console.log(result);

//Scope
let x = 10;
if (true) {
  let y = 20;
  // z is globally scoped due to the var;
  var z = 30;
  console.log(x + y + z);
}

console.log(x + z);

// using arrow  to declare functions
const age = (dob) => {
  let currentYear = 2021;
  return currentYear - dob;
};
console.log(`I will be ${age(2001)} this year`);

let arrow = () => "single line function";
console.log(arrow());

// callback functions

function askName(name) {
  console.log(` Your name is ${name}`);
}

function greetMe(name, callback) {
  let personToGreet = name;
  callback(personToGreet);
}

greetMe("Richmond", askName);
