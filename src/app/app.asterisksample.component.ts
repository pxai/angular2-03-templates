import {Component} from '@angular/core';

/**
 * the *ngFor is just sintactic sugar that tells
 * angular to create una template element for every div
 * Without it we need to add this template code
 */
@Component({
    selector: 'asterisk-sample',
    template: `<div><b>This is a for without asterisk</b>
                    <ng-template ngFor let-course [ngForOf]="courses"  let-counter="index" [ngForTrackBy]="trackByFn">
                        {{counter}} - {{course}}, 
                    </ng-template>
                </div>`
})
export class AsteriskSampleComponent {

}
