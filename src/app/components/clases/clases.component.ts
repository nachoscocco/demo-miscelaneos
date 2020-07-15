import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {

  alerta:string = 'alert-danger';
  
   color:boolean = true;
   propiedades= {
        danger:true,
        danger1:false
   };

   loading:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  ejecutar(){
    this.loading= true; 
    setTimeout(() => this.loading= false, 3000)  // son 3 segundos

  }

}
