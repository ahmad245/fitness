import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBetterStyleChange]'
})
export class BetterStyleChangeDirective implements OnInit {

  @Input() appBetterStyleChange:string;
  constructor(private eRF:ElementRef,private render:Renderer2) { }

ngOnInit()
{
    this.highlight(this.appBetterStyleChange);
}
private highlight(color:string)
{
  this.render.setStyle(this.eRF.nativeElement,'backgroundColor',color);
}
}
