/***************************** Classes *****************************************/

import {HasFormatter} from "../interfaces/HasFormatter";

// In class all properties are PUBLIC br default
export class Invoice implements HasFormatter{
    // We cannot change the 'readonly' parameter inside as well as outside the class
    readonly client: string;
    private details: string;
    public amount: number;

    constructor( c:string , d:string , a:number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}