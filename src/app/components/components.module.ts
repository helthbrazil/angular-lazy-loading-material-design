import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoComponent } from './botao/botao.component';

// Material Design
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TabsComponent } from './tabs/tabs.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BarraProgressoComponent } from './barra-progresso/barra-progresso.component';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    BotaoComponent,
    TabsComponent,
    BarraProgressoComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule, MatDividerModule, MatButtonToggleModule, MatProgressBarModule, MatRippleModule,
    MatSnackBarModule, MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule
  ],
  exports: [BotaoComponent, TabsComponent, BarraProgressoComponent, CardComponent]
})
export class ComponentsModule { }
