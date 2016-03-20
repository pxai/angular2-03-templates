import {Component} from 'angular2/core';

/**
 * using *ngIf : better performance with many components
 * or [hidden]: use for a few components
 */
@Component({
    selector: 'if-sample',
    template: `<div><b>This is an if sample</b>
                <div class='panel' *ngIf="counter == 0">
                    This counter is 0: {{counter}}
                    <button (click)="inc()">Increment</button>
                </div>
                <div class='panel panel-info' *ngIf="counter > 0">
                    This counter is bigger than 0: {{counter}}
                </div>
                <div class='panel panel-warning' [hidden]="counter > 0">
                    This counter is bigger than 0: {{counter}}
                </div>
            </div>`
})
export class IfSampleComponent { 
    private counter : number = 0;
    
    public inc () : void {
        this.counter++;
    }
}
