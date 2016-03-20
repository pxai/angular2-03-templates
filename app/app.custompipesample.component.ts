import {Component} from 'angular2/core';
import {HaxorPipe} from './haxor.pipe';

@Component({
    selector: 'custompipe-sample',
    template: `<div><b>This is a Custom Pipe</b>
                    <input type="text" bindon-ngModel="content">
                    {{content | haxor}}
                </div>`,
    pipes: [HaxorPipe]
})
export class CustomPipeSampleComponent { 
    private content : string = 'Elite';
}
