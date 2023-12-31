import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanciaModModule } from './ejercicios/distancia-b/distancia-mod/distancia-mod.module';
import {ResistenciaMModule} from './actividad_2/resistencia-m/resistencia-m.module';
import { CineMModule } from './actividad_3/cine-m/cine-m.module'
import { MenuComponent } from './menu/menu.component';
import { PizzaMModule } from './actividad_4/pizza-m/pizza-m.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DistanciaModModule,
    ResistenciaMModule,
    CineMModule,
    PizzaMModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
