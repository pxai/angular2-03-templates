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
    var SwitchSampleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * Use ngSwitchDefault alone or with another case
             * Alternate syntax:
             *                     <div *ngSwitch="">
                                    <template>...</template>
                                    <template>...</template>
                                </div>
             */
            SwitchSampleComponent = (function () {
                function SwitchSampleComponent() {
                    this.name = 'any';
                }
                SwitchSampleComponent = __decorate([
                    core_1.Component({
                        selector: 'switch-sample',
                        template: "<div><b>This is a switch sample</b>\n                {{name}} (Try with Eugene, Squidward or any...)\n                <input type=\"text\" bindon-ngModel=\"name\">\n                    <div [ngSwitch]=\"name\">\n                        <template [ngSwitchWhen]=\"'Eugene'\">\n                            <div class=\"panel panel-info\">Mr Krabs</div>\n                        </template>\n                        <template [ngSwitchWhen]=\"'Squidward'\">\n                            <div class=\"panel panel-info\">Mr Tentacles</div>\n                        </template>\n                        <template  ngSwitchDefault>\n                            <div class=\"panel panel-info\">Mr Squarepants</div>\n                        </template>\n                    </div>\n                </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SwitchSampleComponent);
                return SwitchSampleComponent;
            }());
            exports_1("SwitchSampleComponent", SwitchSampleComponent);
        }
    }
});
//# sourceMappingURL=app.switchsample.component.js.map