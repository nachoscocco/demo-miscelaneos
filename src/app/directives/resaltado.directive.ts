import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef) {  console.log('directiva llamada')

        /* el.nativeElement.style.color = 'blue' */

          }
    @HostListener('mouseenter') mouseEntro(){
      
      
      this.resaltar(this.nuevoColor || 'red');    
    }

  @HostListener('mouseleave') mouseSalio() {
  

    this.resaltar(null);    
    
  }
  
  @Input('appResaltado') nuevoColor:string;


  private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
