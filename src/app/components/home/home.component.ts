import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
       <br>
       <br>
       <div class="block">
      <app-ng-style></app-ng-style> 
      </div>
      <br>
      <br>
    <div class="block">
      <app-css></app-css>
      </div>
      <br>
      <br>
  <div class="block">
      <p>Hola mundo desde APP-COMPONENT</p> 
      </div>
      <br>
      <br>
  <div class="block">
      <app-clases></app-clases> 
      </div>
      <br>
      <br>
      <div class="block">
      <p [appResaltado]="'blue'"> Hola directiva </p> 
      </div>
      <br>
      <br>
  <div class="block">
      <app-ng-switch></app-ng-switch>
      </div>
      <br>
      <br>



  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
