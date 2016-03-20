import {Component} from 'angular2/core';

/**
 * with this operator we can avoid
 * checking if a variable is different from null
 * with *ngIf="persona.salary != null"
 * or using complex elvis operation
 */
@Component({
    selector: 'elvis-sample',
    template: `<div><b>Elvis operator Sample</b>
                    <div>Person data
                        <ul>
                            <li>{{person.name}}</li>
                            <li>{{person.race}}</li>
                            <li>{{person?.salary}}</li>
                            <li>{{person?.business?.name}}</li>
                        </ul>
                    </div>
               </div>`
})
export class ElvisSampleComponent { 
    private person : Object = {
        name: 'Eugene Krabs',
        race: 'Krab',
        salary: null,
        business: {
            name : 'Krusty Krab',
            type : 'Fast food'
        }
    }
}
