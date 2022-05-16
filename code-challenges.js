// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js
// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.
// example done in class
// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// INSTRUCTOR EXAMPLE completed during class



// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Make a function named boiling point using conditional statements 
    // The code should evaluate the input and determine an appropriate output 
    // The input will be numbers, the function will categorize the numbers based on the boiling point 
    // The output statements should be conditional to the set boiling point, according to the input

const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilingPoint = (number) => {
    if (number > 212) {
        return `${number} is above boiling point`
    } else if (number === 212) {
        return ` ${number} is THEE boiling point`
    } else {
        return `${number} is below boiling point `
    }
}
    console.log(boilingPoint(temp1)) // output --> 42 is below boiling point 
    console.log(boilingPoint(temp2)) // output --> 350 is above the boiling point
    console.log(boilingPoint(temp3)) // output --> 212 is THEE boiling point 
    console.log(boilingPoint(9999)) // output --> 9999 is above the boiling point 



// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Create a variable named combo array to combine const 1 & 2 into an array 
    // use .concat() to combine the arrays in the variable
    // use .length to count the length of the variable combo array

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]
 
var comboArrays = myNumbers1.concat(myNumbers2)
console.log(comboArrays.length) // output --> 10 



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"

// Create a variable called split const to .split the const currentCohort string 
    // the .split will create a letters array of Charlie 2022
    // use .reverse to reverse the order of the array 
    // use the .join to combine the reversed array into a string 

const currentCohort = "Charlie 2022"
var splitConst = currentCohort.split("")
splitConst.reverse(); 
console.log(splitConst.join("")) // output --> 2202 eilrahC 



// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Make a for loop to iterate each number in the const myArray
    // The iteration will start at index 0 and go on until the end of myArray
    // Use modulo to determine if each number is even or odd 
        // modulo will divide each number by 2
    // Use the if/else conditional statements to categorize even and odd 
        // If the modulo equation equals 0, then it is even, else will be odd

const myArray = [13, 34, 5, 10, 27, 42]
for (let i=0; i<myArray.length; i++){
    if (myArray[i] % 2 === 0) {
        console.log ("even")
    } else {
            console.log("odd")}
        } 
        // --> output 13 odd 
        // --> output 34 even
        // --> output 5 odd 
        // --> output 10 even 
        // --> output 27 odd 
        // --> output 42 even 



// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Use the if/else statements in a funtion to get the smallest const to subtract the biggest const 
        // if the first const is bigger then do not log 
        // else the second const will be smaller and should be subtracted from the first const 

// Set one:
const number1 = 58
const number2 = 100

if (number2 > number1) {
    console.log(number2 - number1)
}
else {
    console.log(number1 - number2)
} // output --> 42 


// Set two:
const number3 = 27
const number4 = 24

if (number3 > number4) {
    console.log(number3 - number4)
}
else {
    console.log(number3 - number4)
} // output --> 3 
