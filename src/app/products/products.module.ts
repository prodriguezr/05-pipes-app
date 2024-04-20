import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import {
  BasicsPageComponent,
  NumbersPageComponent,
  UncommonPageComponent,
} from './pages';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { CanFlyPipe, ToggleCasePipe, SortByPipe } from './pipes';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderPageComponent,
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe,
  ],
  imports: [CommonModule, ProductsRoutingModule, PrimeNgModule],
})
export class ProductsModule {}
