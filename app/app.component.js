System.register(['angular2/core', './app.ifsample.component', './app.switchsample.component', './app.forsample.component', './app.asterisksample.component', './app.pipesample.component', './app.custompipesample.component', './app.ngclasssample.component', './app.ngstylesample.component', './app.ngcontentsample.component', './app.elvissample.component'], function(exports_1, context_1) {
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
    var core_1, app_ifsample_component_1, app_switchsample_component_1, app_forsample_component_1, app_asterisksample_component_1, app_pipesample_component_1, app_custompipesample_component_1, app_ngclasssample_component_1, app_ngstylesample_component_1, app_ngcontentsample_component_1, app_elvissample_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_ifsample_component_1_1) {
                app_ifsample_component_1 = app_ifsample_component_1_1;
            },
            function (app_switchsample_component_1_1) {
                app_switchsample_component_1 = app_switchsample_component_1_1;
            },
            function (app_forsample_component_1_1) {
                app_forsample_component_1 = app_forsample_component_1_1;
            },
            function (app_asterisksample_component_1_1) {
                app_asterisksample_component_1 = app_asterisksample_component_1_1;
            },
            function (app_pipesample_component_1_1) {
                app_pipesample_component_1 = app_pipesample_component_1_1;
            },
            function (app_custompipesample_component_1_1) {
                app_custompipesample_component_1 = app_custompipesample_component_1_1;
            },
            function (app_ngclasssample_component_1_1) {
                app_ngclasssample_component_1 = app_ngclasssample_component_1_1;
            },
            function (app_ngstylesample_component_1_1) {
                app_ngstylesample_component_1 = app_ngstylesample_component_1_1;
            },
            function (app_ngcontentsample_component_1_1) {
                app_ngcontentsample_component_1 = app_ngcontentsample_component_1_1;
            },
            function (app_elvissample_component_1_1) {
                app_elvissample_component_1 = app_elvissample_component_1_1;
            }],
        execute: function() {
            /**
            
             */
            // Different kinds of interpolation
            // Notice textContent is a dom element
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'templates-app',
                        directives: [app_ifsample_component_1.IfSampleComponent, app_switchsample_component_1.SwitchSampleComponent, app_forsample_component_1.ForSampleComponent, app_asterisksample_component_1.AsteriskSampleComponent, app_pipesample_component_1.PipeSampleComponent, app_custompipesample_component_1.CustomPipeSampleComponent, app_ngclasssample_component_1.NgClassSampleComponent, app_ngstylesample_component_1.NgStyleSampleComponent, app_ngcontentsample_component_1.NgContentSampleComponent, app_elvissample_component_1.ElvisSampleComponent],
                        template: "<section>\n                    <if-sample></if-sample>\n                    <switch-sample></switch-sample>\n                    <for-sample></for-sample>\n                    <asterisk-sample></asterisk-sample>\n                    <pipe-sample></pipe-sample>\n                    <custompipe-sample></custompipe-sample>\n                    <ngclass-sample></ngclass-sample>\n                    <ngstyle-sample></ngstyle-sample>\n                    <elvis-sample></elvis-sample>\n                    <ngcontent-sample></ngcontent-sample>\n               </section>\n            "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map