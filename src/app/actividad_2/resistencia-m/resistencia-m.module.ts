import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ResistenciaCComponent } from '../../actividad_2/resistencia-c/resistencia-c.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    ResistenciaCComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule,
    MatTableModule
  ],
  exports:[
    ResistenciaCComponent
  ],
})
export class ResistenciaMModule { 

  
}
