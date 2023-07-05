import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-pizza-c',
  templateUrl: './pizza-c.component.html',
  styleUrls: ['./pizza-c.component.css']
})

export class PizzaCComponent {
  nombre!: string;
  tamanio!: string;
  direccion!: string;
  ingrediente!: string[];
  telefono!: string;
  nPizzas!: number;
  subTotal!: number;
  jamonSeleccionado!: boolean;
  pinaSeleccionada!: boolean;
  champinonesSeleccionados!: boolean;
  pizzas: any[] = [];
  pizzasT: any[] = [];
  edicionHabilitada: boolean = false;
  pizzasForm!: FormGroup;
  jamonControl: FormControl;
  pinaControl: FormControl;
  champinonesControl: FormControl;

  constructor(private readonly fb: FormBuilder, private datePipe: DatePipe) {
    this.pizzasForm = this.initForm();
    this.jamonControl = new FormControl(false);
    this.pinaControl = new FormControl(false);
    this.champinonesControl = new FormControl(false);
  }

  onSubmit(): void {
    this.obtenerValor();
  }

  obtenerValor(): void {
    const nom = this.pizzasForm.get('nombre')?.value;
    const tel = this.pizzasForm.get('telefono')?.value;
    const direccion = this.pizzasForm.get('direccion')?.value;
    const mat = this.pizzasForm.get('tamanio')?.value;
    const eda = this.pizzasForm.get('numPizzas')?.value;
    this.ingrediente = [];
    this.tamanio = mat;
    this.nPizzas = eda;

    if (this.jamonControl.value) {
      this.ingrediente.push('Jamon');
    }
    if (this.pinaControl.value) {
      this.ingrediente.push('Piña');
    }
    if (this.champinonesControl.value) {
      this.ingrediente.push('Champiñones');
    }

    const currentDate = new Date();
    const formattedDate = this.datePipe.transform(currentDate, 'yyyy/MM/dd');
    const pizza = {
      nombre: nom,
      direccion: direccion,
      telefono: tel,
      fecha: formattedDate,
      tamanio: mat,
      ingredientes: this.ingrediente,
      numPizzas: eda,
      subTotal: this.calcularSubtotal(mat, this.ingrediente.length, eda)
    };

    const pizzaT = {
      nombre: nom,
      direccion: direccion,
      telefono: tel,
      fecha: formattedDate,
      tamanio: mat,
      ingredientes: this.ingrediente,
      numPizzas: eda,
      subTotal: this.calcularSubtotal(mat, this.ingrediente.length, eda)
    };

    this.pizzas.push(pizza);
    this.pizzasForm.reset();
    this.pizzasT.push(pizza);
  }

  calcularSubtotal(tamanio: string, numIngredientes: number, numPizzas: number): number {
    let precioBase = 0;

    if (tamanio === 'Chica') {
      precioBase = 40;
    } else if (tamanio === 'Mediana') {
      precioBase = 80;
    } else if (tamanio === 'Grande') {
      precioBase = 120;
    }

    return (precioBase + 10 * numIngredientes) * numPizzas;
  }

  calcularTotalVendido(): number {
    let total = 0;
    for (const pizza of this.pizzasT) {
      total += pizza.subTotal;
    }
    return total;
  }

  eliminarPizza(index: number): void {
    this.pizzas.splice(index, 1);
    this.pizzasT.splice(index, 1);
  }

  modificarPizza(index: number): void {
    this.ingrediente = [];
    const pizza = this.pizzas[index];
    const pizzaT = this.pizzasT[index];
    const nomM = this.pizzasForm.get('nombre')?.value;
    const telM = this.pizzasForm.get('telefono')?.value;
    const direccionM = this.pizzasForm.get('direccion')?.value;
    const matM = this.pizzasForm.get('tamanio')?.value;
    const edaM = this.pizzasForm.get('numPizzas')?.value;

    if (this.jamonControl.value) {
      this.ingrediente.push('Jamon');
    }
    if (this.pinaControl.value) {
      this.ingrediente.push('Piña');
    }
    if (this.champinonesControl.value) {
      this.ingrediente.push('Champiñones');
    }

    pizza.nombre = nomM;
    pizza.direccion = direccionM
    pizza.telefono = telM,
    pizza.tamanio = matM;
    pizza.numPizzas = edaM;
    pizza.ingredientes = this.ingrediente;
    pizza.subTotal = this.calcularSubtotal(matM, this.ingrediente.length, edaM)
    pizzaT.nombre = nomM;
    pizzaT.direccion = direccionM
    pizzaT.telefono = telM,
    pizzaT.tamanio = matM;
    pizzaT.numPizzas = edaM;
    pizzaT.ingredientes = this.ingrediente;
    pizzaT.subTotal = this.calcularSubtotal(matM, this.ingrediente.length, edaM)
  }

  terminarM() {
    this.edicionHabilitada = false;
  }

  confirmarPedido(): void {
    const totalVendido = this.calcularTotalVendido();
    const confirmacion = confirm(`El costo total del pedido es: $${totalVendido}. ¿Está de acuerdo?`);
    if (!confirmacion) {
      this.edicionHabilitada = true;
      return;
    }

    confirm(`Se Realizo la compra`);
    this.pizzasForm.reset();
    this.pizzas = [];
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: [''],
      tamanio: ['', Validators.required],
      numPizzas: [''],
      subTotal: [''],
    });
  }
}
