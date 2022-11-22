import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  defaultImage : String = "./assets/images/default.jpg";
  transform(value: String): String
   {
    if(value.trim().length == 0 )
    return this.defaultImage
    else
    return value
  }

}
