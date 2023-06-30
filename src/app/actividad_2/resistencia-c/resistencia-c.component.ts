import { Component } from '@angular/core';



@Component({
  selector: 'app-resistencia-c',
  templateUrl: './resistencia-c.component.html',
  styleUrls: ['./resistencia-c.component.css']
})
export class ResistenciaCComponent {
  seleccionado1!:string;
  seleccionado2!:string;
  seleccionado3!:string;
  colorSelec!:string;
  resultado!:number;
  vanda1!:string;
  vanda2!:string;
  vanda3!:number;
  vanda4!:number;
  vandas!:string;
  resMas!:number;
  resMenos!:number;




  colorExt=[
    'Gold',
    'Silver'
  ];

  list1: any[] = [
    'Black',
    'Brown',
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Purple',
    'Grey',
    'White'
  ];

  calcularValor() {

    switch(this.colorSelec){
      case 'Gold': this.vanda4=0.05;
                  break;
      case 'Silver': this.vanda4=0.10;
                  break;

    }



    switch(this.seleccionado1){
      case 'Black': this.vanda1="0";
                  break;
      case 'Brown': this.vanda1="1";
                  break;
      case 'Red': this.vanda1="2";
                  break;
      case 'Orange': this.vanda1="3";
                  break;
      case 'Yellow': this.vanda1="4";
                  break;
      case 'Green': this.vanda1="5";
                  break;
      case 'Blue': this.vanda1="6";
                  break;
      case 'Purple': this.vanda1="7";
                  break;
      case 'Grey': this.vanda1="8";
                  break;
      case 'White': this.vanda1="9";
                  break;
    }

    switch(this.seleccionado2){
      case 'Black': this.vanda2="0";
                  break;
      case 'Brown': this.vanda2="1";
                  break;
      case 'Red': this.vanda2="2";
                  break;
      case 'Orange': this.vanda2="3";
                  break;
      case 'Yellow': this.vanda2="4";
                  break;
      case 'Green': this.vanda2="5";
                  break;
      case 'Blue': this.vanda2="6";
                  break;
      case 'Purple': this.vanda2="7";
                  break;
      case 'Grey': this.vanda2="8";
                  break;
      case 'White': this.vanda2="9";
                  break;
    }

    switch(this.seleccionado3){
      case 'Black': this.vanda3=1;
                  break;
      case 'Brown': this.vanda3=10;
                  break;
      case 'Red': this.vanda3=100;
                  break;
      case 'Orange': this.vanda3=1000;
                  break;
      case 'Yellow': this.vanda3=10000;
                  break;
      case 'Green': this.vanda3=100000;
                  break;
      case 'Blue': this.vanda3=1000000;
                  break;
      case 'Purple': this.vanda3=10000000;
                  break;
      case 'Grey': this.vanda3=100000000;
                  break;
      case 'White': this.vanda3=1000000000;
                  break;
    }

    this.vandas = this.vanda1 + this.vanda2;

    this.resultado = parseInt(this.vandas) * this.vanda3;
    this.resMas = (this.resultado* this.vanda4) + this.resultado;
    this.resMenos =this.resultado - (this.resultado* this.vanda4);

  }


}
