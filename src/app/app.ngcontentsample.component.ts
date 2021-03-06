import {Component} from '@angular/core';
/**
* changes ng-content with the content of that class
* ngTransclude in angular2
*/
@Component({
    selector: 'ngcontent-sample',
    template: `<div><b> NgContent Sample</b>
                <super-panel>
                    <div class="heading">
                        This is the heading
                    </div>
                    <div class="content">
                        This is the content
                    </div>
                    <span class="content">More content</span>
                </super-panel>
            </div>`
})
export class NgContentSampleComponent {

}
