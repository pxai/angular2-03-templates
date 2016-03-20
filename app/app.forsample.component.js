System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ForSampleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * #course and #counter are local variables
             * #index is defined by Angular and it increments automatically
             * the *ngFor is just sintactic sugar that tells
             * angular to create una template element for every div
             * Alternative Sintax is given
             */
            ForSampleComponent = (function () {
                function ForSampleComponent() {
                    this.courses = ['Typescript', 'Angular', 'Ionic'];
                }
                ForSampleComponent = __decorate([
                    core_1.Component({
                        selector: 'for-sample',
                        template: "<div><b>This is a for sample</b>\n                    <div *ngFor=\"#course of courses, #counter = index\">\n                        {{counter}} - {{course}}\n                    </div>\n                    <template ngFor [ngForOf]=\"courses\" #course #counter=index>\n                        {{counter}} - {{course}}, \n                    </template>\n                </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ForSampleComponent);
                return ForSampleComponent;
            }());
            exports_1("ForSampleComponent", ForSampleComponent);
        }
    }
});
//# sourceMappingURL=app.forsample.component.js.map