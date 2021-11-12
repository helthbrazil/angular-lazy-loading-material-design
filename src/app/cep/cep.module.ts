import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CepRoutingModule } from './cep-routing.module';
import { CepComponent } from './cep.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    CepComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    MatInputModule, MatFormFieldModule, MatIconModule,
    ReactiveFormsModule,
    CepRoutingModule
  ]
})
export class CepModule { }
