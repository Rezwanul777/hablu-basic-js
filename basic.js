//1.Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo" ; 
console.log(carName);


//2.On one single line, declare three variables with the following names and values:

// firstName = "John"
// lastName = "Doe"
// age = 35

/* So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
3rd Variable Name And Values Both! */

let firstName = "John";  // write variable name
let lastName = "Doe" //write variable values 
let age = 15 ; // write variable name and values both 



//3. Use the correct assignment operator that will 
// result in x being 50 (same as x = x * y). 

let x = 10;
let y = 5;
x = 10*5. // what will be the value of x ? 
console.log(x);


//4. Use comments to describe the correct data type of the following variables:

let length = 16; // data type :number 
let lastName = "Johnson"; // data type: string

const x = {
  firstName: "John",  
  lastName: "Doe"
};    // data type :object


// 5.Execute the function named myFunction.
 
 function myFunction() {
  alert("Hello World!");
}

// call the function and see the output 

myFunction();


/* 6
Create an object called person with name = John, age = 50, Then,
access the object to alert("John is 50").
 
*/

let person = {
    name: 'John',
    age: 50,
}

let result = person['name'] + " is " + person['age'] 

alert(result);


/* 7. The <button> element should do something when someone clicks on it. Try to fix it!  -->
<button>Click me</button>  -- pls see the solve in index.html*/


//8.Array Related Question 

//. Alert the number of items in an array, using the correct Array property: 

const cars = ["Volvo", "Jeep", "Mercedes"];

alert(" The number of items in an array is " + cars.length)

//Part 2: Change the first item of Brand to "Ford"

 cars[0] ="Ford";

 console.log(cars);

 //9. Math related Question

/* a. Use the correct Math method to create a random number. */

const randomNumber = Math.random();
console.log(randomNumber);


/* b. Use the correct Math method to return the largest number of 10 and 20.. */

const largestNumber = Math.max(10,20)
console.log(largestNumber);

/* c. Use the correct Math method to get the square root of 9. */

const sqrRootNumber = Math.sqrt(9)
console.log(sqrRootNumber);


//10--comparison operator related problems! 

/* a. Choose the correct comparison operator to alert true, when x is greater than y. 
x = 10;
y = 5;

alert() // ?  */


if(x>y) {
    alert(true);
}

// Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough"

let age=16

age<18 ? alert("Too young") : alert("Old enough")



