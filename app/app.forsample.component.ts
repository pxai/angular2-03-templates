import {Component} from 'angular2/core';

/**
 * #course and #counter are local variables
 * #index is defined by Angular and it increments automatically
 * the *ngFor is just sintactic sugar that tells
 * angular to create una template element for every div
 * Alternative Sintax is given
 */
@Component({
    selector: 'for-sample',
    template: `<div><b>This is a for sample</b>
                    <div *ngFor="#course of courses, #counter = index">
                        {{counter}} - {{course}}
                    </div>
                    <template ngFor [ngForOf]="courses" #course #counter=index>
                        {{counter}} - {{course}}, 
                    </template>
                </div>`
})
export class ForSampleComponent { 
    private courses : string[] = ['Typescript','Angular', 'Ionic'];
}
