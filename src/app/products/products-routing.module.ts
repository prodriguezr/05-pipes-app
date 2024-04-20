import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  BasicsPageComponent,
  UncommonPageComponent,
  NumbersPageComponent,
} from './pages';
import { OrderPageComponent } from './pages/order-page/order-page.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsPageComponent,
  },
  {
    path: 'numbers',
    component: NumbersPageComponent,
  },
  {
    path: 'uncommon',
    component: UncommonPageComponent,
  },
  {
    path: 'order',
    component: OrderPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
