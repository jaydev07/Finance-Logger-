"use strict";
// Browser doesnot understand typescript so you first have to convert typescript into JS
const characters = "JD";
console.log(characters);
/********** Types & Variables **********/
// In TS you cannot change the type of the variable afterwords
// So In the arguments of the function you have to mention the type of the variable
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7));
/************** Arrays & objects  *****************/
// Arrays
let names = ['JD', 'jaydev'];
names.push('jainu');
// If all the type of elements are included in the array then you can add any one into the array
let all = [5, 'jd', true];
all.push(55);
// Objects
//And the properties of the object is treated as the variables
let student = {
    name: 'Jaydev',
    branch: 'ICT',
    age: 19,
};
//student.skills='qwer' <- We cannot add additional properties into the object
/*************************Explicit Types ***************/
// variables
let myName;
let myAge;
let adult;
let mix;
myAge = 23;
// Arrays
let allStuds = [];
allStuds.push('JD');
// union types
let mixed = [];
mixed.push(28);
mixed.push('JD');
mixed.push(true);
// objects
let stud;
let stud2;
/***************************** Any Type *************************/
let v;
v = 'JD';
v = 34;
v = true;
let anyArray = [];
anyArray.push('JD');
anyArray.push(33);
/****************************** Function Basics ************************************/
let add;
// ? -> represents that  the parameter is optional & :void says that the function doesnot return anything
add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
add(6, 6, 'JD');
// =10 represents the default value 
const minus = (a, b, c = 10) => {
    return a - b;
};
let result = minus(5, 3, 20);
console.log(result);
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
/********************************** Function Signatures ****************************************/
// This is the function signature
let calc;
calc = (num1, num2, op) => {
    if (op === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
// Example-2
let logDetails;
logDetails = (student) => {
    console.log(`${student.name} is ${student.age} years old.`);
};
