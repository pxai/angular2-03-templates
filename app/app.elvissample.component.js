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
    var ElvisSampleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * with this operator we can avoid
             * checking if a variable is different from null
             * with *ngIf="persona.salary != null"
             * or using complex elvis operation
             */
            ElvisSampleComponent = (function () {
                function ElvisSampleComponent() {
                    this.person = {
                        name: 'Eugene Krabs',
                        race: 'Krab',
                        salary: null,
                        business: {
                            name: 'Krusty Krab',
                            type: 'Fast food'
                        }
                    };
                }
                ElvisSampleComponent = __decorate([
                    core_1.Component({
                        selector: 'elvis-sample',
                        template: "<div><b>Elvis operator Sample</b>\n                    <div>Person data\n                        <ul>\n                            <li>{{person.name}}</li>\n                            <li>{{person.race}}</li>\n                            <li>{{person?.salary}}</li>\n                            <li>{{person?.business?.name}}</li>\n                        </ul>\n                    </div>\n               </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ElvisSampleComponent);
                return ElvisSampleComponent;
            }());
            exports_1("ElvisSampleComponent", ElvisSampleComponent);
        }
    }
});
//# sourceMappingURL=app.elvissample.component.js.map