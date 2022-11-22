import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  constructor() { }

  @HostBinding("style.color") color : String = "red"
  @HostBinding("style.border-color") borderColor : String = "green"

  colors : Array<String> = ["blue","black","green","yellow","orange","lightblue","pink","purple","violet","red"];

  @HostListener('keyup') keyUp(){
    this.color = this.colors[Math.trunc(Math.random() * this.colors.length )]
    this.borderColor = this.color

    }

}
