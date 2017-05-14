import {Component} from '@angular/core';


@Component({
    selector: 'custompipe-sample',
    template: `<div><b>This is a Custom Pipe</b>
                    <input type="text" bindon-ngModel="content">
                    {{content | haxor}}
                </div>`
})
export class CustomPipeSampleComponent {
    private content : string = 'Elite';
}
