// Question 1 - How many vowels?
// Write code that counts the number of vowels in a string.
// +1 bonus points if you ask for the string from the user


var sentence = "How many vowels do you think are in this one?";

//Define function
function getVowels(str) {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
}

//Print number of vowels
console.log(`Number of vowels: ${getVowels(sentence)}`);

//Bonus part
// Ask the user for string 
var userInput = prompt("Please enter a string:"); 
// Print the result 
console.log(`Number of vowels: ${getVowels(userInput)}`);


// Question 2 - Odd Addition
// You'll be given three arrays containing two numbers each. 
// Write a script that checks if the numbers are odd or even.
// If they are odd, multiple them and return or print the results.
// If they are even, add them and return or print the results.
// For example, [3, 5] would return 15; but [3, 6] would result in 9

const first = [5, 7];
const second = [12, 3];
const third = [7, 7];


function processArrays(arrays) {
    let results = arrays.map(array => {
        // Check if odd
        let allOdd = array.every(num => num % 2 !== 0);
        
        if (allOdd) {
            // Multiply if all are odd
            return array.reduce((product, num) => product * num, 1);
        } else {
            // Add if there's any even number
            return array.reduce((sum, num) => sum + num, 0);
        }
    });

    console.log("Results: ", results);
}

const arrays = [
    [5, 7],
    [12, 3],
    [7, 7],
];

processArrays(arrays);


// Question 3 - Twenty One
// You'll receive three arrays with two numbers again.
// If the two numbers add up to 21, return True
// If they don't, return False unless they are identical
// If they are identical, return "Split"

const p = [19, 2];
const q = [4, 6];
const r = [16 ,16];


function checkArraysSumTo21(arrays) {
    let results = arrays.map(array => {
        // Check if all elements are identical
        let allIdentical = array.every(num => num === array[0]);

        if (allIdentical) {
            console.log("split");
            return "split";
        } else {
            // Calculate the sum of the array
            let sum = array.reduce((total, num) => total + num, 0);
            // Check if the sum is 21
            return sum === 21;
        }
    });

    console.log("Results: ", results);
}

// Test the function with some sample arrays
const arrays = [
    [19, 2],
    [4, 6],
    [16, 16]
];

checkArraysSumTo21(arrays);





// Question 4 - FizzBuzz
// This is a classic programming question.
// Print out the numbers from 1 to 100, except
// If the number is a multiple of three, print Fizz
// If the number is a multiple of five, print Buzz
// If the number is a multiple of three and five, print FizzBuzz
// Your output might look something like 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz ....

// Your solution goes here




// Question 5 - Start my car
// Create a car variable (object)
// Give it the properties of make, model, year, and color
// Give it a start method that returns to the console "Vroom vroom! Car started!" or something similar
// Call the start method

// Your solution goes here

var car = {

}
car.start()


//Question 6 - How many states are there?
// Ok, this seems silly, but we're actually going to work with AJAX to get some data and process it
// You need to load a geojson file, convert it to json, and then count up the number of entires it has...
// In other words, print out to the console log the number of airports in the data set
// You'll want to use chapter 3 of the roth textbook and our lecture on Friday here.
// +2 bonus points if you tell me first how many total airports there are and then how many civilian 
// feel free to explore the data in QGIS (or arc). If you know how to answer the question in QGIS, how do you transfer it to javascript?

function jsAjax(){
    //Step 1: Create the data request
    // You may not have your data stored in a data sub-directory, just update this appropriately
    var request = new Request('data/airports.geojson');

    //Step 2: define Fetch parameters
    // Note this isn't really necessary, do you remember/know why?
    
    //Step 3: use Fetch to retrieve the data and set up callback functions

};

//Step 4: define your callback functions
// You'll need to process the data in some way. First, from geojson to json... then to find the answer.
// Loops are helpful here.


//Step 5: send the final answer to the console.log()


// Question 7 - Dynamically creating a list
// This problem draws heavily from Chapter 2 of your workbook (the Roth et al.), so make sure to review there if you're stuck!
// I'm going to give you two arrays as variables. One will have city names, the other their populations.
// You need to create a FUNCTION that takes in the two arrays (so the data is not created within them, this is different from the example in Chapter 2)
// The function should take in the arrays, combine them into an HTML FORMATTED TABLE
// The table should be added to an imaginary div with the id "mydiv"

var cities = ['Corvallis', 'Portland', 'Eugene', 'Albany']
var pops = ['59920', '652500', '176650', '56470']

//Create your function
function cities(){

}

// There are many ways to get this added to the <div id="mydiv"></div> of the associated (imaginary) website.
// This can happen in the function, it can happen as a return of the function, etc.
// The general structure should look something like:
var [whatever] = document.getElementById("mydiv")
[whatever].appendChild([What_You_Called_the_table_you_created])

// one way I like is to have the function return the contents of the table and call the function as I create a new variable that's directly fed into the element...
// this relies on 'method chaining' and is NOT NECESSARY
// if you're not sure what I mean, don't worry. It's definitely not the only way. 
// Review Chapter 2 of your work book for SEVERAL other ways.