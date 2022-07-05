// Variable Creation
// keyword variableName = value;
// Keywords: let, var, const
// Generic variable declaration keywords
// let - can be reassigned but not redeclared
// var - can be reassigned and redeclared
// const - cannot be reassigned or redeclared
let instructorName = "Davis";
console.log(instructorName);
instructorName = "Gavin"; // reassignment is allowed for let variables
console.log(instructorName);
instructorName = 15;
console.log(instructorName);

const companyName = "WCCI";
//companyName = "WeCanCodeIT"; // this is not allowed, results in error

// Operators
// math operators, logic operators, assignment operators, increment operators, etc.
let formattedName = instructorName + companyName;
let num = 0;
num++;
num += 5; // num = 6;
console.log(num);
console.log("Hello!");

// Conditionals
// if(condition){code to run} else if ...
// switch(val){case otherVal: code; }
if(false){
    console.log(false);
}
else if(true){
    console.log(true);
}
else{

}

switch(num){
    case 6:
        console.log("Num is 6!");
        break;
    default:
        break;
}

let vacation = true ? "Vacay!" : "Not vacation";

// Loops
// syntax? exactly the same MINUS foreach
// let i instead of int i
for(let i = 0; i < 5; i++){
    console.log(i);
}

let j = 0;
while(j < 5){
    console.log(j);
    j++
}

let k = 0;
do {
    console.log(k);
    k++;    
} while(false);
// Collections
// one main type of collection: array
// BUT our arrays in JS can change length, and can have values of any type
let arrayExample = ["davis", "gavin", "xavier", true, 15, 5.234, ["miguel", "dina", "aden", "michael", "thomas", 234.12362342]];
console.log(arrayExample);
console.log(arrayExample[1]);
console.log(arrayExample[5][1]);

// foreach syntax:
// collection.forEach(arrow function);
// arrow functions, nameless functions
// input => code
// (inputs) => { code to run } 
arrayExample.forEach(    
    (item) => {
    console.log(item);
    console.log("inside of a loop");
});

// WARNINGS >:(
// null means no value
// undefined means searching for a value, can't find it
// null is not equal to undefined
console.log(null === undefined);
console.log("5" == 5);
console.log("5" === 5);