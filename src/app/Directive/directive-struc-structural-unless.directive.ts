import { Directive, OnInit, TemplateRef, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveStrucStructuralUnless]'
})
export class DirectiveStrucStructuralUnlessDirective implements OnInit {

  @Input()set appDirectiveStrucStructuralUnless(bool:boolean)
  {
       if(!bool)
       {
         this.view.createEmbeddedView(this.templetRef);
       }
       else
       {
         this.view.clear();
       }
  }
  constructor(private view:ViewContainerRef,private templetRef:TemplateRef<any>) { }
ngOnInit()
{}
}
