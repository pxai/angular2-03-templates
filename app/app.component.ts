import {Component} from 'angular2/core';
import {IfSampleComponent} from './app.ifsample.component';
import {SwitchSampleComponent} from './app.switchsample.component';
import {ForSampleComponent} from './app.forsample.component';
import {AsteriskSampleComponent} from './app.asterisksample.component';
import {PipeSampleComponent} from './app.pipesample.component';
import {CustomPipeSampleComponent} from './app.custompipesample.component';
import {NgClassSampleComponent} from './app.ngclasssample.component';
import {NgStyleSampleComponent} from './app.ngstylesample.component';
import {NgContentSampleComponent} from './app.ngcontentsample.component';
import {ElvisSampleComponent} from './app.elvissample.component';

/**

 */
// Different kinds of interpolation
// Notice textContent is a dom element
@Component({
    selector: 'templates-app',
    directives: [IfSampleComponent,SwitchSampleComponent,ForSampleComponent, AsteriskSampleComponent, PipeSampleComponent, CustomPipeSampleComponent, NgClassSampleComponent, NgStyleSampleComponent, NgContentSampleComponent, ElvisSampleComponent],
    template: `<section>
                    <if-sample></if-sample>
                    <switch-sample></switch-sample>
                    <for-sample></for-sample>
                    <asterisk-sample></asterisk-sample>
                    <pipe-sample></pipe-sample>
                    <custompipe-sample></custompipe-sample>
                    <ngclass-sample></ngclass-sample>
                    <ngstyle-sample></ngstyle-sample>
                    <elvis-sample></elvis-sample>
                    <ngcontent-sample></ngcontent-sample>
               </section>
            `
})
export class AppComponent {

}
