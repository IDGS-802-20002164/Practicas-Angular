import { Component } from '@angular/core';

@Component({
  selector: 'app-cine-c',
  templateUrl: './cine-c.component.html',
  styleUrls: ['./cine-c.component.css']
})
export class CineCComponent {
  compradores!:number;
  tarjetaseleccion!:string;
  nombre!:string;
  cantidadC!:string;
  cantidadB!:string;
  totalS!:number;
  total!:number;

  tarjeta=[
    'Si',
    'No'
  ];

  calcular(){
    this.compradores = parseInt(this.cantidadC) * 7;

    if(parseInt(this.cantidadB) <= this.compradores){
      if(parseInt(this.cantidadB)> 5){
        this.totalS = (parseInt(this.cantidadB) * 12.000) - ((parseInt(this.cantidadB) * 12.000) * 0.15)
       }else if(parseInt(this.cantidadB)>= 3 && parseInt(this.cantidadB)<=5){
        this.totalS = (parseInt(this.cantidadB) * 12.000) - ((parseInt(this.cantidadB) * 12.000) * 0.10)
       }else if(parseInt(this.cantidadB) <=2){
        this.totalS = (parseInt(this.cantidadB) * 12.000)
       }
       if(this.tarjetaseleccion == 'Si'){
        this.total = this.totalS - (this.totalS * 0.10)
       }else{
        this.total = this.totalS
       }
    }else{
      this.nombre = 'No puede comprar mas boletos'
      this.total = 0
      this.cantidadB = ''
    }


   
   

  }
}
