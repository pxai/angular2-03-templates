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
    var NgClassSampleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * We'll make this
             *                <div>
                                <h3><i class="glyphicon"
                                   [class.glyphicon-heart-empty] = "!heartOn"
                                   [class.glyphicon-heart] = "heartOn"
                                   [style.color] = "heartOn ? 'red' : 'none' "
                                   (click)="heartBeat()">
                                </i> Beat Me!</h3>
                            </div>
                Using angular's ngClass we apply one class or another
             */
            NgClassSampleComponent = (function () {
                function NgClassSampleComponent() {
                    this.heartOn = false;
                }
                NgClassSampleComponent.prototype.heartBeat = function () {
                    this.heartOn = !this.heartOn;
                };
                NgClassSampleComponent = __decorate([
                    core_1.Component({
                        selector: 'ngclass-sample',
                        template: "<div><b>This is a NgClass Sample</b>\n                    <h4><i class=\"glyphicon\"\n                       [ngClass] = \"{\n                           'glyphicon-heart-empty' : !heartOn,\n                           'glyphicon-heart' : heartOn\n                       }\"\n                       (click)=\"heartBeat()\">\n                    </i> Beat Me!</h4>\n                </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgClassSampleComponent);
                return NgClassSampleComponent;
            }());
            exports_1("NgClassSampleComponent", NgClassSampleComponent);
        }
    }
});
//# sourceMappingURL=app.ngclasssample.component.js.map