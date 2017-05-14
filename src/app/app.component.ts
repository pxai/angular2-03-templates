import { Component } from '@angular/core';


// Different kinds of interpolation
// Notice textContent is a dom element
@Component({
  selector: 'templates-app',
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
