import {Component} from 'angular2/core';
/**
 * the *ngFor is just sintactic sugar that tells
 * angular to create una template element for every div
 * Without it we need to add this template code
 */ 
@Component({
    selector: 'asterisk-sample',
    template: `<div><b>This is a for without asterisk</b>
                    <template ngFor [ngForOf]="courses" #course #counter=index>
                        {{counter}} - {{course}}, 
                    </template>
                </div>`
})
export class AsteriskSampleComponent { 
    
}
