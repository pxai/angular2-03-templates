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
    var AsteriskSampleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * the *ngFor is just sintactic sugar that tells
             * angular to create una template element for every div
             * Without it we need to add this template code
             */
            AsteriskSampleComponent = (function () {
                function AsteriskSampleComponent() {
                }
                AsteriskSampleComponent = __decorate([
                    core_1.Component({
                        selector: 'asterisk-sample',
                        template: "<div><b>This is a for without asterisk</b>\n                    <template ngFor [ngForOf]=\"courses\" #course #counter=index>\n                        {{counter}} - {{course}}, \n                    </template>\n                </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AsteriskSampleComponent);
                return AsteriskSampleComponent;
            }());
            exports_1("AsteriskSampleComponent", AsteriskSampleComponent);
        }
    }
});
//# sourceMappingURL=app.asterisksample.component.js.map