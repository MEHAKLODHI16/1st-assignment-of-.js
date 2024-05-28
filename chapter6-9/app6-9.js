// // 1. Write a program to take a number in a variable, do the
// // required arithmetic to display the following result in your

document.write("<h1>QUESTION # 1</h1>");

let q = 10;

document.write("<h3>Result</h3>");
document.write(" <br/>");
document.write(" <br/>");

document.write(" q = 10 <br/>");
document.write("The value of q is: 10<br/>");
document.write("----------------------------------------------------<br/>");
document.write("<br/>");

++q;
document.write(" ++q<br/>");
document.write("The value of ++q is: 11<br/>");
document.write("Now the value of q is: 11<br/>");
document.write("<br/>");

q++;
document.write("q++<br/>");
document.write("The value of q++ is: 11<br/>");
document.write("Now the value of q is: 12<br/>");
document.write("<br/>");

--q;
document.write("--q<br/>");
document.write("The value of --q is: 11<br/>");
document.write("Now the value of q is: 11<br/>");
document.write("<br/>");

q--;
document.write("q--<br/>");
document.write("The value of q-- is: 11<br/>");
document.write("Now the value of q is: 10<br/>");

document.write("<h1>QUESTION # 2</h1>");
document.write("<br/>");

//  2. What will be the output in variables a, b & result after
//  execution of the following script:
//  var a = 2, b = 1;
//  var result = --a - --b + ++b + b--;
//  Explain the output at each stage:
let a = 2,
  b = 1;
document.write("a=2 ,b =1<br/>");

--a - --b + ++b + b--;
//    1   - 0   + 1  +  1
document.write("<h3>   --a - --b + ++b + b-- </h3>");

document.write("       1   - 0    + 1     + 1 <br/>");

document.write("hence<br/>");
document.write("<h3>   a = 1  </h3>");
document.write("<h3>   b = -1  </h3>");
document.write("<h3>   Result = 3  </h3>");

document.write("<h1>QUESTION # 3</h1>");
document.write("<br/>");
// 3. Write a program that takes input a name from user &
// greet the user. 
// Prompt the user to enter their name
let name = prompt("Please enter your name:");

// Greet the user
alert("Hello, " + name + "! Welcome!");



document.write("<h1>QUESTION # 4</h1>");
document.write("<br/>");
// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

document.write("<h1>QUESTION # 5</h1>");
document.write("<br/>");


let num = prompt("Enter your desired multiplication table no");
if(num===""){
    num = 5
}
for(let i=1 ; i <=10 ;i++){
    document.write( num+ " x " +i+ " = " +num*i+ "<br/>")
}

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
let subject1 = prompt("Please enter name of first subject:");
 
let subject2= prompt("Please enter  name of second subject:");
 
let subject3= prompt("Please enter  name of third subject:");

// b) Total marks for each subject is 100, store it in another
// variable.
let totalMarks =100;

// c) Take obtained marks for first subject from user and
// stored it in different variable.
let marksObtainedInSubject1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));



// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
let marksObtainedInSubject2= parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));

let marksObtainedInSubject3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
    // Calculate total marks and percentage
    let totalObtainedMarks = marksObtainedInSubject1 + marksObtainedInSubject2 + marksObtainedInSubject3;
    let totalPercentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

    // Display the result in a table
    document.write("<h2>Subject Marks</h2>");
    document.write("<table border='1'>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
    document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marksObtainedInSubject1+ "</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marksObtainedInSubject2+ "</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marksObtainedInSubject3+ "</td></tr>");
    document.write("</table>");
    document.write("<p>Total Obtained Marks: " + totalObtainedMarks + "</p>");
    document.write("<p>Percentage: " + totalPercentage.toFixed(2) + "%</p>");








