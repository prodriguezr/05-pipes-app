import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import {
  BasicsPageComponent,
  NumbersPageComponent,
  UncommonPageComponent,
} from './pages';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, PrimeNgModule],
})
export class ProductsModule {}
