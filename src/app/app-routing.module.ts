import { RouterModule, Routes } from "@angular/router";
import { NgModel } from "@angular/forms";
import { NgModule } from "@angular/core";
import { DistanciaComponent } from "./ejercicios/distancia/distancia.component";
import { CineCComponent } from "./actividad_3/cine-c/cine-c.component";
import { ResistenciaCComponent } from "./actividad_2/resistencia-c/resistencia-c.component";
import { PizzaCComponent } from "./actividad_4/pizza-c/pizza-c.component";



const routes:Routes=[
    {path: '', redirectTo: '/home', pathMatch:'full'},
    {path: 'Distancia', component: DistanciaComponent },
    {path: 'Cine', component: CineCComponent },
    {path: 'Resitencias', component: ResistenciaCComponent },
    {path: 'Pizzas', component: PizzaCComponent },
   
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}