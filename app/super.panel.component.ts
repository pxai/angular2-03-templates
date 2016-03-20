import {Component} from 'angular2/core';

/**
* changes ng-content with the content of that class
* ngTransclude in angular2
*/
@Component({
    selector: 'super-panel',
    template: `<div class="panel pane-default">
                    <div class="panel-heading">
                        <ng-content select=".heading"></ng-content>
                    </div>
                    <div class="panel-content">
                        <ng-content select=".content"></ng-content>
                    </div>
               </div>`
})
export class SuperPanelComponent { 
    
}
