import {Component} from 'angular2/core';

/**
 * Formats:
 *  uppercase, lowercase
 *  number, currency
 *  date
 *  json: to expose objects
 */ 
@Component({
    selector: 'pipe-sample',
    template: `<div><b>This is a pipe sample</b>
                <ul>
                    <li>{{title | uppercase}}</li>
                    <li>{{bigNumber | number}}</li>
                    <li>{{mark | number:'2.2-2'}}</li>
                    <li>{{price | currency:'USD':true:'2.2-2'}}</li>
                    <li>{{deliveryDate | date:'yyyy MM dd'}}</li>
                </ul>
            </div>`
})
export class PipeSampleComponent { 
    private title : string = 'This is just a title';
    private bigNumber : number = 4456343424;
    private mark : number = 9.34;
    private price : number = 166.386;
    private deliveryDate: Date = new Date(2015,12,30);
}
