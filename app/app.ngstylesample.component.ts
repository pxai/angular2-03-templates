import {Component} from 'angular2/core';

/**
 * Control specif styles.
 * Generally it's much better to use ngClass
 */
@Component({
    selector: 'ngstyle-sample',
    template: `<div><b>This is a button for NgStyle Sample</b>
                <button 
                    [ngStyle]="{
                        color : bright ? 'yellow' : 'gray',
                        backgroundColor : bright ? 'green' : 'black'
                    }"
                (click)="changeButton()">
                Click me</button>
                </div>`
})
export class NgStyleSampleComponent { 
    private bright : boolean = true;
    
    public changeButton () : void {
        this.bright = !this.bright;
    }
}
