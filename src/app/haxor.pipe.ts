import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'haxor'
})
export class HaxorPipe implements PipeTransform {
    public transform(value: string, args: string[]) {

        if (value) { // notei: insensitive, g: global
            return value.replace(/A/ig, '4').
                        replace(/E/ig,'3').
                        replace(/I/ig,'|').
                        replace(/O/ig,'0').
                        replace(/L/ig,'1').
                        replace(/T/ig,'7');
        }
    }
}
