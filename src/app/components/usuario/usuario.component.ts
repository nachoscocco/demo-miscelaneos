import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor( private rutaactiva:ActivatedRoute) {
    this.rutaactiva.params
        .subscribe( parametros =>{
          console.log("RUTA PADRE:");
          console.log(parametros);
        })
   }

  ngOnInit(): void {
  }

}
