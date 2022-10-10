console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result
console.log('-------------- 1 -------------');
// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

console.log('-------------- 2 -------------');
// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  //returns 'Hello, NAME!'
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log('Test - should say "Hello, NAME"', helloName('Anthony'));

console.log('-------------- 3 -------------');
// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber , secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
//
let firstNumber = 3;
let secondNumber = 4;

//Call the function to test
console.log(firstNumber, ' plus ', secondNumber, ' equals ', addNumbers(firstNumber, secondNumber));

console.log('-------------- 4 -------------');
// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber){
  //returns three variable multiplied together
  return(firstNumber * secondNumber * thirdNumber);
}
// Reuses previous variables
firstNumber = 3;
secondNumber = 4;
// Initiates new variable thirdNumber
let thirdNumber = 4

//Call the function to multiply three numbers together
console.log(firstNumber, ' times ', secondNumber, ' times ', thirdNumber, ' equals', multiplyThree(firstNumber,secondNumber,thirdNumber));

console.log('-------------- 5 -------------');
// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );

console.log('-------------- 6 -------------');
// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  return array.pop();
}
// initiats an empty array called apple.
let apple = [];
console.log('Test - should return undefined: ', getLast(apple));

//fills array 'apple' with number 1-10.
apple = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Test - should return 10: ', getLast(apple));

console.log('-------------- 7 -------------');
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  // initiate varaible wasValueFound with value of false.
  // for of loop to move through all values of array.
  for (item of array){
    if (value == item){
      return true;
    }
  }
  //return false if vale is not found in array
  return false;
}
//reuse array 'apple' from last question.
console.log('Test - should return false:' , find(12, apple));

console.log('Test - should return true:' , find(4, apple));

// ----------------------
// Stretch Goals
// ----------------------

console.log('-------------- 8 -------------');
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  // if the first character in string is equal to letter then...
  if (string.charAt(0) == letter){
    return true;
  }
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

console.log('-------------- 9 -------------');
// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  // For each value of array,
  for (eachValue of array){
    //add value to the sum of array
    sum += eachValue;
    //console.log(sum);
  }
  // returns value of sum
  return sum;
}
// creates array call pineapple
pineapple = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Test - should return a sum of 55: ', sumAll(pineapple));

console.log('-------------- 10 -------------');
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPostiveNumbers(array){
  // create new array to hold positive numbers in array
  let positveNumberArray = [];
  // where the positive numbers will be indexed in array
  let index = 0;
  // For each value we will place positive values in the following index
  for (eachValue of array){
    if (eachValue > 0){
      positveNumberArray[index]=eachValue;
      index++;
    }
  }
  return positveNumberArray;
}
let appleSauce = [-5,-2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Test - should return numbers 1-10 from appleSauce array: ',  allPostiveNumbers(appleSauce));

console.log('-------------- 11 -------------');
// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//   In a board game, a piece may advance 1-6 tiles forward depending 
// on the number rolled on a six-sided dice. If you advance your piece 
// onto the same tile as another player's piece, both of you earn a bonus.

//  1.  Can you reach your friend's tile number in the next roll? 
// Create a function that takes your position a and your friend's 
// position b and returns a boolean representation of whether it's 
// possible to earn a bonus on any dice roll.

function possibleBonus(a, b){
  if (a === b){
    console.log('Players get bonus!!');
    return true
  }
  console.log('Players recieve no bonus :(')
  return false
}

function rollDice(){
  //We want to return a random number between 1-6 without decimal. 

  // Math.floor() rounds down to whole number. Math.random()*6+1 provides a random number >= 1 AND <= 6.
  return Math.floor(Math.random() * (6))+1;

}

console.log('Test - should return false: ', possibleBonus(1,2));
console.log('Test - Should return true: ', possibleBonus(3,3));

function playGameSimulation(){
  console.log('---- Playing game ----')
  let playerOnePosition = rollDice();
  let playerTwoPositiion = rollDice();
  console.log('PlayerOne position: ', playerOnePosition);
  console.log('PlayerTwo position: ', playerTwoPositiion);
  possibleBonus(playerOnePosition, playerTwoPositiion);
}

playGameSimulation();

