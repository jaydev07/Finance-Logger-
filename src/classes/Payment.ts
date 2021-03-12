/***************************** Classes *****************************************/

import {HasFormatter} from "../interfaces/HasFormatter";

// In class all properties are PUBLIC br default
export class Payment implements HasFormatter{
    // We cannot change the 'readonly' parameter inside as well as outside the class
    readonly recipient: string;
    private details: string;
    public amount: number;

    constructor( c:string , d:string , a:number) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}