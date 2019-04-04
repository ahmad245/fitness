import { Directive, ElementRef, Renderer2, Input, HostBinding, HostListener } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appToggleDropdwon]'
})
export class ToggleDropdwonDirective {
  bool:boolean=true;
@Input() appToggleDropdwon:string;
  // @HostBinding('class.show') onClik=true;
  @HostListener('click')  toggle()
  {
    if(this.bool)
    {
      this.render.addClass(this.appToggleDropdwon,'show');
      this.bool=!this.bool;
    }
    else
    {
      this.render.removeClass(this.appToggleDropdwon,'show');
      this.bool=!this.bool;
    }
  } 
  
  constructor(private eRF:ElementRef,private render:Renderer2) 
  {
   
    
   }
  


}
