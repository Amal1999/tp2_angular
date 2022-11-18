import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): any
   {
    if(value.replace(/\s/g, '').length == 0 )
    return "./assets/images/demon.jpg"
    else
    return value  
  }

}
