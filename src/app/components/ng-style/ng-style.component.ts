import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamanio">
    Este es mi ngStyle
    </p>

    <button class=" mr-1   btn btn-otuline btn-primary" (click)='tamanio=tamanio + 5' >
       <i class="fa fa-plus"></i>  
    </button>
     
      <button class=" btn btn-otuline btn-secondary" (click)="tamanio=tamanio - 5" >
       <i class="fa fa-minus"></i>  
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {


  tamanio: number = 50;
  constructor() { }

  ngOnInit(): void {
  }

}
