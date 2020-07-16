import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private rutaactiva: ActivatedRoute) { 

    this.rutaactiva.parent.params.subscribe( parametros=>{
      console.log("RUTA HIJA UsuarioNuevo")
      console.log (parametros);
    })
  }

  ngOnInit(): void {
  }

}
