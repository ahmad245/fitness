import { ElementRef, OnInit, Directive, HostListener, Input } from '@angular/core';

@Directive
({
    selector:'[styleBackground]'
})
export class styleBackground implements OnInit
{
    @Input() styleBackground:string;
    @HostListener('mouseenter') onHover()
    {

      this.hieghlight(this.styleBackground);

    }
    @HostListener('mouseleave') ondragleave()
    {
        this.hieghlight(null);
    }

    constructor(private eRF:ElementRef)
    {
       
    }
    private hieghlight(color:string)
    {
        this.eRF.nativeElement.style.backgroundColor=color;
    }

   ngOnInit()
   {
      
      
   }
}