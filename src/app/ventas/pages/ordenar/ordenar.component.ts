import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas : boolean = false;
  ordenarPor : string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.Azul
    },{
      nombre: 'Flash',
      vuela: false,
      color: Color.Rojo
    },{
      nombre: 'Batman',
      vuela: false,
      color: Color.Negro
    },{
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.Verde
    },{
      nombre: 'Tormenta',
      vuela: false,
      color: Color.Blanco
    },{
      nombre: 'Guepardo',
      vuela: false,
      color: Color.Amarillo
    },{
      nombre: 'Mujer Maravilla',
      vuela: false,
      color: Color.Rojo
    }
  ];
  heroes2 : Heroe[] = [...this.heroes];

  constructor() {}

  ngOnInit(): void {
  }

  cambiarMayusculas(){
    this.enMayusculas = !this.enMayusculas;
  }

  ordenTabla(valor: string){
    this.ordenarPor = valor;
  }

}
