import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
