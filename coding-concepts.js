// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.
// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))
// a) Your answer:
// b) Verify and explain:
// INSTRUCTOR EXAMPLE completed during class 



// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: This will output the number of characters (including spaces) of the string, which is 10 
// b) Verify and explain: The command returns the number of elements in the array, the length is always the last index of the array plus one, the index starts count at 0.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: This will output the character in the 4th index of the string, which is the letter "o"
// b) Verify and explain: You can reference the variable and the square brackets will identify the element, like an address for the index. 


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: This will output the first element in the array, which is "JavaScript"
// b) Verify and explain: This output "Ruby", I keep forgetting that the count starts at 0. 


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: The built in method of .toUpperCase() will make the weekendDays come out as all upper case. 
// b) Verify and explain: The built in method did not work because the const weekendDays is not written as a string, it is written as an array. The computer cannot differentiate between words and data. 


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: The .length and dataTpes will most probably not work with this code syntax. 
// b) Verify and explain: typeOf is used to find the data type of a variable, since the .length was referencing a number, the output is 'number' 
