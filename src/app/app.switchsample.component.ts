import {Component} from '@angular/core';


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
    template: `<div> <b>This is a switch sample</b>
                {{name}} (Try with Eugene, Squidward or any...)
                <input type="text" bindon-ngModel="name">
                    <div [ngSwitch]="name">
                        <ng-template [ngSwitchCase]="'Eugene'">
                            <div class="panel panel-info">Mr Krabs</div>
                        </ng-template>
                        <ng-template [ngSwitchCase]="'Squidward'">
                            <div class="panel panel-info">Mr Tentacles</div>
                        </ng-template>
                        <ng-template  ngSwitchDefault>
                            <div class="panel panel-info">Mr Squarepants</div>
                        </ng-template>
                    </div>
                </div>`
})
export class SwitchSampleComponent {
    private name : string = 'any';
}
