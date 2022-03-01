//Review

/////////////////////////////////////////////////////////////////////////////////////
//Anonymous Inline Function is being passed to the forEach as its one arguement
// const colors = ['red', 'green', 'blue'];

// colors.forEach(function(color, idx) {
//   console.log(`${idx + 1} - ${color}`);
// });

// JavaScript has designed the forEach method to:

// Accept a callback function as an argument, and
// Invoke that callback once for each element in the array

/////////////////////////////////////////////////////////////////////////////////////

//In addition to using callbacks functions with forEach, you also used them when you added event listeners in your Tic-Tac-Toe game like so:
// gameboard.addEventListener('click', handleClick);

/////////////////////////////////////////////////////////////////////////////////////

//Example of higher-order function; compute() - accepts add() and subtract() as arguements
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function compute(a, b, op) {
    return op(a, b);
}
let result1 = compute(10, 5, add);
let result2 = compute(10, 5, subtract);

// // Three use-cases for callback functions:

// // To provide a function to be called by a higher-order function such as forEach or the compute function we wrote above.

// // To provide a function to be executed each time an event happens - just like with the addEventListener example above.

// // To provide a function to be executed when an asynchronous process has completed.

// /////////////////////////////////////////////////////////////////////////////////////

// //How many times would the callback function be called? Three
const flowers = ['rose', 'orchid', 'daisy'];

flowers.forEach(function(flower, idx) {
  console.log(`${idx + 1}) ${flower}`);
});

// /////////////////////////////////////////////////////////////////////////////////////

// // Asynchronous vs Synchronous Code

// //Synchronous: when a line of code completely finished executing before the next line of code begins to run. 
// const colors = ['red', 'green', 'blue'];

// console.log('BEFORE the forEach...');

// colors.forEach(function(color, idx) {
//     console.log(`${idx + 1} - ${color}`);
// });

// console.log('AFTER the forEach...');

// // Asynchronous function call continues to run before the async function finishes.
// console.log('Code before the asynchronous function call');

// setTimeout(function() {
//   console.log('setTimeout code')
// });

// console.log('Code after the asynchronous function call');
// // We use setTimeout to "simulate" asynchronous code.

// // Asynchronous functions are necessary in JavaScript because JS runs on a single CPU thread dedicated to handling events, running your code, painting the screen, etc.
// // Now imagine calling a function that gets data from a database. From the CPU point of view, the database will take an eternity to return the data.
// // If the CPU were to wait until the data came back, nothing else could be done and the browser would freeze up!
// // JavaScript avoids forcing the CPU to wait for "long-running" input/output operations, such as fetching data across the Internet.

// /////////////////////////////////////////////////////////////////////////////////////

// //SIMULATED ASYNCHRONOUS EXAMPLE

// // Synchronous function
// function getFriends() {
//     return ['Fred', 'Barney'];
//   }
  
//   // Get the friends
//   let friends = getFriends();
  
//   // The friends array is ready to work with because getFriends
//   // is synchronous and returned the array of friends we wanted
//   friends.forEach(function(friend) {
//     console.log(friend);
//   });

// //   Now let's use a setTimeout within getFriends() to simulate a long-running asynchronous function (as if we were fetching the data across a network):
  
//   // asynchronous function
//   function getFriendsAsync() {
//     // Using setTimeout to make getFriendsAsync
//     // behave like a long-running database operation
//     setTimeout(function() {
//       return ['Fred', 'Barney'];
//     }, 0);
//   }
  
//   // Will friends have an array after this line of code runs?
//   let friends = getFriendsAsync();
  
//   // The following will cause an error because
//   // friends is not an array yet
//   friends.forEach(function(friend) {
//     console.log(friend);
//   })

//   ///////////////////////////////////////////////////////////////////////////////////

// //CALLBACKS TO RESCUE 
// // Refactor to accept a callback function to be called when the data is ready

// function getFriendsAsync(cb) {
//     setTimeout(function() {
//       // pass the results to the provided callback
//       cb(['Fred', 'Barney']);
//     }, 0);
//   }
  
// // Execute and provide it with an anonymous callback function to be called by the getFriendsAsync function
// getFriendsAsync(function(friends) {
//     friends.forEach(function(friend) {
//         console.log(friend);
//     });
// });

// /////////////////////////////////////////////////////////////////////////////////////

// //ARROW FUNCTIONS

// // regular function
// let squares = [1, 2, 3].map(function (x) { return x * x });
// // arrow function
// let squares = [1, 2, 3].map(x => x * x);

// // x => { ... }  || one parameter
// // () => { ... }  || no parameters
// // (x, y) => { ... }  || two or more parameters

// /////////////////////////////////////////////////////////////////////////////////////

// //Statement block of arrow function behaves just like that of a regular function 
// const getGrade = score => {
//     if (score === 100) return 'A+';
//     score = Math.floor(score / 10);
//     return ['F', 'F', 'F', 'F', 'F', 'F', 'D', 'C', 'B', 'A'][score];
//   };

// /////////////////////////////////////////////////////////////////////////////////////

// //If there's only a single expression (not a statement), curly braces are optional:
//   const logThis = () => { console.log(this) };
//   const logThis = () => console.log(this);

// //   Arrow functions will implicitly return the result of an expression without a block (braces):
//   const add = (x, y) => { return x + y };
  
//   // Ideal single-statement arrow function
//   const add = (x, y) => x + y;
  
//   // Returns undefined (blocks are like reg functions)
//   const add = (x, y) => { x + y };
  
//   // // Syntax error, must be an expression
//   // const add = (x, y) => return x + y;



// //   To implicitly return a JS object, wrap it in parentheses to avoid the curly braces of the object being interpreted as a statement block:
//   let todos = ['Buy milk', 'Mow lawn'];
  
//   // Below line of code won't work - looks like a statement block
//   // let todoObjects = todos.map(todo => {todo: todo, done: false});
  
//   // Wrap the implicit returned object in parens
//   let todoObjects = todos.map(todo => ({todo: todo, done: false}));
  

// //   All arrow functions are expressions. There's no such thing as an arrow function definition/declaration.

//   // Nope, syntax error (no declarations for arrow functions)
//   // add(x, y) => x + y;
  
//   // // This is what you want - a function expression
//   // const add = (x, y) => x + y;