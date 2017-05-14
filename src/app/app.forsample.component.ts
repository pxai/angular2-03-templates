import {Component} from '@angular/core';

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
                    <div *ngFor="let course of courses; let counter = index; trackBy: trackByFn">
                        {{counter}} - {{course}}
                    </div>
                    <ng-template ngFor let-course [ngForOf]="courses"  let-counter="index" [ngForTrackBy]="trackByFn">
                        {{counter}} - {{course}}, 
                    </ng-template>
                </div>`
})
export class ForSampleComponent {
    private courses : string[] = ['Typescript','Angular', 'Ionic'];
}
