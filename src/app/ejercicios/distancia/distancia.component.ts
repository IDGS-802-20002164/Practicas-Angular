import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent {
  num1!:number;
  num2!:number;
  num3!:number;
  num4!:number;
  resultado!:number;
  
  calcular(){
    this.resultado = Math.sqrt(Math.pow(this.num3 - this.num1, 2) + Math.pow(this.num4 - this.num2, 2));
  }
}
