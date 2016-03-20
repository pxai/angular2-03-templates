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
    var PipeSampleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * Formats:
             *  uppercase, lowercase
             *  number, currency
             *  date
             *  json: to expose objects
             */
            PipeSampleComponent = (function () {
                function PipeSampleComponent() {
                    this.title = 'This is just a title';
                    this.bigNumber = 4456343424;
                    this.mark = 9.34;
                    this.price = 166.386;
                    this.deliveryDate = new Date(2015, 12, 30);
                }
                PipeSampleComponent = __decorate([
                    core_1.Component({
                        selector: 'pipe-sample',
                        template: "<div><b>This is a pipe sample</b>\n                <ul>\n                    <li>{{title | uppercase}}</li>\n                    <li>{{bigNumber | number}}</li>\n                    <li>{{mark | number:'2.2-2'}}</li>\n                    <li>{{price | currency:'USD':true:'2.2-2'}}</li>\n                    <li>{{deliveryDate | date:'yyyy MM dd'}}</li>\n                </ul>\n            </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PipeSampleComponent);
                return PipeSampleComponent;
            }());
            exports_1("PipeSampleComponent", PipeSampleComponent);
        }
    }
});
//# sourceMappingURL=app.pipesample.component.js.map