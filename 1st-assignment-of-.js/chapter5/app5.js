document.write("<h1>QUESTION 1</h1>");
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// Setting the values of num1 and num2
let num1 = 3;
let num2 = 5;

// Adding the numbers
let sum = num1 + num2;

// Displaying the result in the browser
document.write("<h3>Result of Addition:</h3>");

document.write("<p>Sum of " + num1 + " and " + num2 + " is " + sum + "</p>");

document.write("<h1>QUESTION 2</h1>");
//2. Repeat task1 for subtraction, multiplication, division & modulus.

// Adding the numbers
let difference = num1 - num2;

// Displaying the result in the browser
document.write("<h3> Result of Subtraction:</h3>");

document.write(
  "<p>Difference of " + num1 + " and " + num2 + " is " + difference + "</p>"
);

// Adding the numbers
let product = num1 * num2;

// Displaying the result in the browser
document.write("<h3>Result of Multiplication:</h3>");

document.write(
  "<p>Product of " + num1 + " and " + num2 + " is " + product + "</p>"
);

// Adding the numbers
let quotent = num1 / num2;

// Displaying the result in the browser
document.write("<h3>Result of Division :</h3>");

document.write(
  "<p>Quotent of " + num1 + " and " + num2 + " is " + quotent + "</p>"
);

// Adding the numbers
let modulus = num2 % num1;

// Displaying the result in the browser
document.write("<h3>Result of Modulus:</h3>");

document.write(
  "<p>Modulus of " + num2 + " and " + num1 + " is " + modulus + "</p>"
);

document.write("<h1>QUESTION 3</h1>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
let nm;
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
document.write("<h3>Value after variable declaration</h3>");
document.write("Value after variable declaration is: " + nm + "<br>");
// c. Initialize the variable with some number.
let num = 5;
// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.write("<h3>Initial value</h3>");
document.write("Initial value: " + num + "<br>");

// e. Increment the variable.
num++;

// f. Show the value of the variable in your browser like “Value after increment is: 6”.
document.write("<h3>Value after increment</h3>");
document.write("Value after increment is: " + num + "<br>");

// g. Add 7 to the variable.
num += 7;

// h. Show the value of the variable in your browser like “Value after addition is: 13”.
document.write("<h3>Value after addition of 7</h3>");
document.write("Value after addition is: " + num + "<br>");

// i. Decrement the variable.
num--;

// j. Show the value of the variable in your browser like “Value after decrement is: 12”.
document.write("<h3>Value after Decrement</h3>");
document.write("Value after decrement is: " + num + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.
document.write("<h3>Value after Dividing the variable’s value by 3.</h3>");
let remainder = num % 3;
document.write("<p>Quotent of " + num + " and " + 3 + " is " + 4 + "</p>");
// l. Output: “The remainder is: 0”.
document.write("<h3>Output</h3>");
document.write("The remainder is: " + remainder);

//  QUESTION # 4
document.write("<h1>QUESTION 4</h1>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// Store the ticket price in a variable
let ticketPrice = 600;

// Calculate the cost of buying 5 tickets
let numberOfTickets = 5;
let totalCost = ticketPrice * numberOfTickets;

// Display the result
document.write(
  "<p>The cost of buying 5 movie tickets is: " + totalCost + " PKR</p>"
);

//  QUESTION # 5
document.write("<h1>QUESTION 5</h1>");

//Write a script to display multiplication table of anynumber in your browser.

document.write("<h2>Table of 4</h2>");

// Display multiplication table of 4
for (var i = 1; i <= 10; i++) {
  document.write("4 × " + i + " = " + 4 * i + "<br/>");
}

//  QUESTION # 6

document.write("<h1>QUESTION 6</h1>");

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
document.write("<h3> Convert 25 Celsius to Fahrenheit<h3/>");
// a. Store a Celsius temperature into a variable.
let c = 25;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.

let Fahrenheit = (c * 9) / 5 + 32;
document.write(c + "<sup> o </sup>C is " + Fahrenheit + "<sup> o</sup>F<br/> ");


document.write("<h3>Convert Fahrenheit to Celsius<h3/>")
// c. Now store a Fahrenheit temperature into a variable.
let f = 70;
// d. Convert it to Celsius & output “NNoF is NNoC”.
let Celsius = ((f - 32) * 5) / 9;
document.write(f + "<sup> o </sup>F is " + Celsius + "<sup> o</sup>C<br/>");

//  QUESTION # 7
document.write("<h1>QUESTION 7</h1>");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables.
document.write("<h3> Invoice of shopping cart system for an e-commerce website. <h3/>");
// a. Price of item 1
 let priceOfItem1 = 650;
 document.write("Price of item 1 is 650</br> ")
// b. Price of item 2
document.write("<p>Price of item 2 is 100</p> ")
let priceOfItem2 =100
// c. Ordered quantity of item 1
document.write("<p>Ordered quantity of item 1 is 3</p> ")
let  OrderedQuantityOfItem1 =3;
// d. Ordered Quantity of item 2
document.write("<p>Ordered quantity of item 2 is 7</p> ")
let  OrderedQuantityOfItem2 = 7;
// e. Shipping charges
document.write("<p>Shipping charges are 100 </p>")
let  ShippingCharges =100;
// Compute the total cost & show the receipt in your browser.
let totalCosts =(priceOfItem1*3) +(priceOfItem2*7) +ShippingCharges
document.write("<p> The total cost of your order is RS " + totalCosts+ " .</p>")


//  QUESTION # 8

document.write("<h1>QUESTION 8</h1>");
// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
document.write("<h3>Marksheet</h3>");
document.write("<p>Total Marks = 980 </p>");
let TotalMarks = 980 ;
document.write("<p>Marks Obtained = 804</p>")
let marksObtained = 804;
let percentage =(marksObtained / TotalMarks) *100 ;
document.write("<p> Percentage:"+percentage +"<p/>")




//  QUESTION # 9
document.write("<h1>QUESTION 9</h1>");
//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write("<h3>Currency in PKR<h3/>");
document.write("<p> 1 US Dollar =104.80 </p>");
let USDollar  = 104.80;

document.write("<p> 1 Saudi Riyal = 28 </p>");
let SaudiRiyal = 28 ;


let  PakistaniRupee =(USDollar*10)+(SaudiRiyal*25) ;
document.write("The total currency in PKR:"+ PakistaniRupee+ "<br/>");



//  QUESTION # 10
document.write("<h1>QUESTION 10</h1>");
document.write("<h3>Calculation of single expression</h3>")
// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
let number=15;
document.write("let the number is 15<br/>");
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
let calculation = (number + 5) *10 /2;
// let calculation = [{(number + 5)*10}/2];
document.write("The solution when 5 is added to the number then multiply it by 10 and divide the result by 2  :"+calculation+"" ) 

//  QUESTION # 11
document.write("<h1>QUESTION 11</h1>");
document.write("<h3> The AGE CALCULATOR<h3/>")
// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
let  currentYear  = 2016;
document.write("currentYear  = 2016 <br/>")
// b. Store their birth year in a variable.
let  birthYear  = 1992;
document.write("  birthYear  = 1992 <br/>")
// c. Calculate their 2 possible ages based on the stored
// values.let    = ;
let yourAge =currentYear- birthYear
document.write("your age is  "+yourAge+"<br/>")

// Output them to the screen like so: “They are either NN or NN
// years old”.


//  QUESTION # 12
document.write("<h1>QUESTION 12</h1>");
document.write("<h3The Geometrizer><h3/>");
// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
let radiusOfACircle =20 ;
document.write("Radius of acircle is 20 cm .<br/>")
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
let circumference = 2 *(3.142) * radiusOfACircle;
document.write("The circumference is:"+circumference+"<br/>")
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
let areaOfACircle = (3.142)* (radiusOfACircle*radiusOfACircle)
document.write("Area of a circle:" +areaOfACircle+ "<br/>")

//  QUESTION # 13
document.write("<h1>QUESTION 13</h1>");
document.write("<h3>The life time supply calculator<h3/>");
// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
let favoriteSnack = "gems" ;
document.write("Favorite Snack = gems<br/>");
// b. Store your current age into a variable.
let currentAge= 30  ;
document.write("Current Age= 30 <br/>");
// c. Store a maximum age into a variable.
let maximumAge =50 ;
document.write("Maximum Age =50 <br/>");
// d. Store an estimated amount per day (as a number).
let estimatedAmountPerDay = 5 ;
document.write("Estimated amount per day= 5 times<br/>");
// e. Calculate how many would you eat total for the rest of
// your life.
let  totalSnacks = (maximumAge - currentAge) * (365*5);
document.write("you will need "+totalSnacks+ " gems to last you until the ripe old age of "+maximumAge+"<br/>");
// Output the result to the screen like so: “You will need
// NNNN last you until the ripe old age of to NN”.
