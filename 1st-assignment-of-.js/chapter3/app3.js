// Page 1 of 3

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
let age = 15;
alert("I am " + age + " years old");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 
//Show his/her number of visits on your web page.
let numberOfVisits = 14; 
// Assuming the visitor has visited the page 10 times
alert("You have visited this site " + numberOfVisits + " times.");

// 3. Declare a variable called birthYear & assign to it your birth year. 
//Show the following message in your browser:
let birthYear = 1990;
document.write(
  "My birth year is " +
    birthYear +
    "<br> Data type of my declared variable is " +
    typeof birthYear +
    "."
);

// Page 2 of 3

// 4. A visitor visits an online clothing store www.xyzClothing.com .
// Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

let visitorName = "Johne Doe";
let productTitle = "T-shirt";
let quantity = 5;
document.write(
"<br>" +
visitorName +
"ordered" +
quantity +
 " "+
 productTitle +
 "(s) on XYZ Clothing store."
);


