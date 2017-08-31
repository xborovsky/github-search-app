import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'keys', pure : false })
export class KeysPipe implements PipeTransform {
    transform(value:any, args:any[] = null):any {
        let keys = [];
        for (let key in value) {
            keys.push({key: key, value: value[key]});
        }
        return keys;
    }
}
