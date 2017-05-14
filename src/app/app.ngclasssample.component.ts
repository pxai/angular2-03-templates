import {Component} from '@angular/core';

/**
 * We'll make this
 *                <div>
                    <h3><i class="glyphicon"
                       [class.glyphicon-heart-empty] = "!heartOn"
                       [class.glyphicon-heart] = "heartOn"
                       [style.color] = "heartOn ? 'red' : 'none' "
                       (click)="heartBeat()">
                    </i> Beat Me!</h3>
                </div>
    Using angular's ngClass we apply one class or another
 */
@Component({
    selector: 'ngclass-sample',
    template: `<div><b>This is a NgClass Sample</b>
                    <h4><i class="glyphicon"
                       [ngClass] = "{
                           'glyphicon-heart-empty' : !heartOn,
                           'glyphicon-heart' : heartOn
                       }"
                       (click)="heartBeat()">
                    </i> Beat Me!</h4>
                </div>`
})
export class NgClassSampleComponent {
    private heartOn : boolean = false;

    public heartBeat () {
        this.heartOn = !this.heartOn;
    }
}
