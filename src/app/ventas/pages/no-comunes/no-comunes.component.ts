import { Component } from '@angular/core';
import { interval } from 'rxjs';


enum genero{
  masculino = 'masculino',
  femenino = 'femenino'
}
@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre : string = 'Leonardo';
  genero : string = genero.femenino;

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  };

  persona = {
    nombre : 'Leonardo',
    edad : 39,
    ciudad : 'Villa Mugueta, Argentina'
  }

  heroes = [
    {
      nombre : 'Superman',
      vuela : true 
    },{
      nombre : 'Batman',
      vuela : false 
    },{
      nombre : 'Mujer Maravilla',
      vuela : false 
    },{
      nombre : 'Linterna Verde',
      vuela : true 
    }
  ]

  miObservable = interval(1000);

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos una promesa cumplida.')
    },3500);
  })

  //i18nPlural
  clientes : string[] = ['Maria','Leonardo','Elene','Fernando','Erika','Betiana','Sergio'];
  clientesMapa = {
    '=0' : 'no tenemos ningún cliente esperando',
    '=1' : 'tenemos un cliente esperando.',
    'other' : 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    if(this.genero === genero.femenino ){
      this.nombre = 'Leonardo';
      this.genero = genero.masculino;
    }else{
      this.nombre = 'Elene';
      this.genero = genero.femenino;
    }
  }

  borrarCliente(){
    this.clientes.pop();
  }

  constructor() { }


}
