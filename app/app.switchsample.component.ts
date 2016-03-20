import {Component} from 'angular2/core';

/**
 * Use ngSwitchDefault alone or with another case
 * Alternate syntax:
 *                     <div *ngSwitch="">
                        <template>...</template>
                        <template>...</template>
                    </div>
 */ 
@Component({
    selector: 'switch-sample',
    template: `<div><b>This is a switch sample</b>
                {{name}} (Try with Eugene, Squidward or any...)
                <input type="text" bindon-ngModel="name">
                    <div [ngSwitch]="name">
                        <template [ngSwitchWhen]="'Eugene'">
                            <div class="panel panel-info">Mr Krabs</div>
                        </template>
                        <template [ngSwitchWhen]="'Squidward'">
                            <div class="panel panel-info">Mr Tentacles</div>
                        </template>
                        <template  ngSwitchDefault>
                            <div class="panel panel-info">Mr Squarepants</div>
                        </template>
                    </div>
                </div>`
})
export class SwitchSampleComponent { 
    private name : string = 'any';
}
