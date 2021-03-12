// Browser doesnot understand typescript so you first have to convert typescript into JS

const characters = "JD";
console.log(characters);

/********** Types & Variables **********/

// In TS you cannot change the type of the variable afterwords
// So In the arguments of the function you have to mention the type of the variable
const circ = (diameter:number) => {
    return diameter*Math.PI;
}

console.log(circ(7));


/************** Arrays & objects  *****************/

// Arrays
let names = ['JD','jaydev'];
names.push('jainu');

// If all the type of elements are included in the array then you can add any one into the array
let all = [5,'jd',true];
all.push(55);

// Objects
//And the properties of the object is treated as the variables
let student = {
    name:'Jaydev',
    branch:'ICT',
    age:19,
}

//student.skills='qwer' <- We cannot add additional properties into the object


/*************************Explicit Types ***************/

// variables
let myName: string;
let myAge: number;
let adult: true;

let mix: string|number;

myAge=23

// Arrays
let allStuds : string[] = [];
allStuds.push('JD');

// union types
let mixed : (string|number|boolean)[] = [];
mixed.push(28);
mixed.push('JD');
mixed.push(true);

// objects
let stud : object;

let stud2 : {
    name: string,
    age: number,
    branch: string
}

/***************************** Any Type *************************/

let v : any;
v='JD';
v=34;
v=true;

let anyArray: any[] = [];
anyArray.push('JD');
anyArray.push(33);

/****************************** Function Basics ************************************/

let add: Function;

// ? -> represents that  the parameter is optional & :void says that the function doesnot return anything
add = (a: number , b: number , c?: number | string): void => {
    console.log(a+b);
    console.log(c);
}

add(5,10);
add(6,6,'JD');

// =10 represents the default value 
const minus = (a:number , b:number , c: number = 10): number => {
    return a-b;
}

let result = minus(5,3,20);
console.log(result);


/********************************* Type Aliases ************************************/

// Through this you can assign miutlple type to a single variable
type stringOrNum = string | number;
type objUser = { name:string , uid: stringOrNum};

const greet = ( user: objUser) => {
    console.log(`${user.name} says hello`);
}

/********************************** Function Signatures ****************************************/

// This is the function signature
let calc: (a:number , b:number , c:string) => number;

calc = (num1:number, num2:number , op:string) => {
    if(op==='add'){
        return num1 + num2;
    }else{
        return num1 - num2;
    }
}

// Example-2
let logDetails : (obj:{name:string , age:number}) => void;

type person= {name:string , age:number};

logDetails = (student:person) => {
    console.log(`${student.name} is ${student.age} years old.`);
}



