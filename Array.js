
let a =[1,4,3,2,5,6,9,8];
const ab= ["anv", "sap",124];

console.log("The original array:- "+a);
console.log("The length is:- "+a.length);                                       // Length 
console.log("Accessing the First element:- "+a[0]);                             // Accessiing the 1st Element
console.log("Accessing the last element of the array:- "+a[a.length-1]);        // Accessing the last element
console.log("Adding the New Element:- "+a.push(7));                             // push 
console.log("Array After push:- "+a);
console.log("The array after sorting:- "+a.sort());                             // Sort
console.log("Combining two array");
console.log(...a, ...ab);

// MAPPING iterates over each element of the array.

console.log("MAPPING ARRAY METHOD")

// Multiplying each element with 2

console.log("MULTIPLYING THE ELEMENT BY 2");
let b=a.map(c => 2*c);                 // c is the implicitly means represent all element of array a declare with the arrow function                           
console.log(b);

let c=a.map(function(c){              // another way to declare without arrow function
    return c*2;
});                                                         
console.log(c);


// Calculating the square of each elements

console.log("SQUARING THE ELEMENT")
const square= a.map(function(num){
    return num*num;
});
console.log(square);

// FILTERING  it creates a new array with only the elements that pass a certain condition. 

console.log("FILTER ARRAY METHOD")
console.log("PRINTING THE EVEN NUMBERS")
const evenNumbers = a.filter(function(number) {
    return number % 2 === 0;
  }); 
console.log(evenNumbers);


