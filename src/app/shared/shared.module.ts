import { NgModule } from '@angular/core';
import { MenuComponent } from './components';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [PrimeNgModule],
})
export class SharedModule {}
