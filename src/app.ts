/************************** Interfaces and Classes ************************/

import {Invoice} from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import {Payment} from "./classes/Payment.js";
import {HasFormatter} from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("JD",'Web work',250);
docTwo = new Payment("Jaydev" , "Software dev" , 500);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

/*********************** DOM & Type casting **************************/

// ! <- Indicates that the developer knows that the particular element exists in html code
const anchore = document.querySelector('a')!;

// console.log(anchore.href);

// 'as' is use for explecit type casting
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

/************** Rendering an HTML Template***********************/
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener( 'submit' , (e: Event) => {
    e.preventDefault();

    let doc:HasFormatter;
    if(type.value === "invoice"){
        doc = new Invoice(tofrom.value , details.value , amount.valueAsNumber);
    }else{
        doc = new Payment(tofrom.value , details.value , amount.valueAsNumber);
    }
    // console.log(doc.format());

    list.render(doc , type.value , 'start');
});

/***************************** Classes *****************************************/

let invOne = new Invoice('JD' , 'For MojoMeets wed development' , 10000);
let invTwo = new Invoice('Jaydev' , 'Web dev' , 5000);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    // console.log(inv.format());
});

/*********************** Interfaces **********************/

interface IsPerson{
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): void;
}

let  me: IsPerson = {
    name:'Jaydev',
    age:19,
    speak(text: string){
        console.log(text);
    },
    spend(amount:number){
        console.log(`I spend ${amount}`);
    }
}

const greetPerson = (person: IsPerson) => {
    // console.log(`Hello ${person.name}`);
} 

greetPerson(me);

/**************************** Generics ******************************/

const addUid = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 1000);
    return {...obj , uid};
}

let docNew = addUid({name:'JD' , age:19});

console.log(docNew.age);

// In Interfaces

interface Resource<T>{
    uid: number;
    resourceName: string;
    data: T;
}

const docType: Resource<string[]> = {
    uid:1,
    resourceName:'person',
    data:['Ohh Yeah','I like It']
}

/**************************** Enum **********************************************/

enum ResourecType {BOOK , PEOPLE , BAG};

/***************************** Tuple ************************************/

let student: [string , number];
student = ['Jaydev',19];