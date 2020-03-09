import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitBy'
})
export class SpliterPipe implements PipeTransform {

  transform(value: string, spliter: string = ','): string {
    let values = value.split(spliter);
    let res = "";
    values.forEach(val => {
      if (val.trim().length > 0) {
        res += `"${val.trim()}", `;
      }
    });
    if (res.endsWith(", ")) {
      return res.substring(0, res.length - 2);
    }
    return res;
  }

}
