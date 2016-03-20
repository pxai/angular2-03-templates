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
    var IfSampleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * using *ngIf : better performance with many components
             * or [hidden]: use for a few components
             */
            IfSampleComponent = (function () {
                function IfSampleComponent() {
                    this.counter = 0;
                }
                IfSampleComponent.prototype.inc = function () {
                    this.counter++;
                };
                IfSampleComponent = __decorate([
                    core_1.Component({
                        selector: 'if-sample',
                        template: "<div><b>This is an if sample</b>\n                <div class='panel' *ngIf=\"counter == 0\">\n                    This counter is 0: {{counter}}\n                    <button (click)=\"inc()\">Increment</button>\n                </div>\n                <div class='panel panel-info' *ngIf=\"counter > 0\">\n                    This counter is bigger than 0: {{counter}}\n                </div>\n                <div class='panel panel-warning' [hidden]=\"counter > 0\">\n                    This counter is bigger than 0: {{counter}}\n                </div>\n            </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], IfSampleComponent);
                return IfSampleComponent;
            }());
            exports_1("IfSampleComponent", IfSampleComponent);
        }
    }
});
//# sourceMappingURL=app.ifsample.component.js.map