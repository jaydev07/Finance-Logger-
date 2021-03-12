/************************** Interfaces and Classes ************************/
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice("JD", 'Web work', 250);
docTwo = new Payment("Jaydev", "Software dev", 500);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
/*********************** DOM & Type casting **************************/
// ! <- Indicates that the developer knows that the particular element exists in html code
const anchore = document.querySelector('a');
// console.log(anchore.href);
// 'as' is use for explecit type casting
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
/************** Rendering an HTML Template***********************/
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(doc.format());
    list.render(doc, type.value, 'start');
});
/***************************** Classes *****************************************/
let invOne = new Invoice('JD', 'For MojoMeets wed development', 10000);
let invTwo = new Invoice('Jaydev', 'Web dev', 5000);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    // console.log(inv.format());
});
let me = {
    name: 'Jaydev',
    age: 19,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spend ${amount}`);
    }
};
const greetPerson = (person) => {
    // console.log(`Hello ${person.name}`);
};
greetPerson(me);
/**************************** Generics ******************************/
const addUid = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docNew = addUid({ name: 'JD', age: 19 });
console.log(docNew.age);
const docType = {
    uid: 1,
    resourceName: 'person',
    data: ['Ohh Yeah', 'I like It']
};
/**************************** Enum **********************************************/
var ResourecType;
(function (ResourecType) {
    ResourecType[ResourecType["BOOK"] = 0] = "BOOK";
    ResourecType[ResourecType["PEOPLE"] = 1] = "PEOPLE";
    ResourecType[ResourecType["BAG"] = 2] = "BAG";
})(ResourecType || (ResourecType = {}));
;
/***************************** Tuple ************************************/
let student;
student = ['Jaydev', 19];
