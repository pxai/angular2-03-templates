System.register(['angular2/core', './super.panel.component'], function(exports_1, context_1) {
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
    var core_1, super_panel_component_1;
    var NgContentSampleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (super_panel_component_1_1) {
                super_panel_component_1 = super_panel_component_1_1;
            }],
        execute: function() {
            /**
            * changes ng-content with the content of that class
            * ngTransclude in angular2
            */
            NgContentSampleComponent = (function () {
                function NgContentSampleComponent() {
                }
                NgContentSampleComponent = __decorate([
                    core_1.Component({
                        selector: 'ngcontent-sample',
                        directives: [super_panel_component_1.SuperPanelComponent],
                        template: "<div><b> NgContent Sample</b>\n                <super-panel>\n                    <div class=\"heading\">\n                        This is the heading\n                    </div>\n                    <div class=\"content\">\n                        This is the content\n                    </div>\n                    <span class=\"content\">More content</span>\n                </super-panel>\n            </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgContentSampleComponent);
                return NgContentSampleComponent;
            }());
            exports_1("NgContentSampleComponent", NgContentSampleComponent);
        }
    }
});
//# sourceMappingURL=app.ngcontentsample.component.js.map