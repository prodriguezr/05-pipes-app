import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styles: ``,
})
export class OrderPageComponent {
  public isUpper: boolean = false;
  public orderBy?: keyof Hero | undefined | '' = 'canFly';
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Green Lantern',
      canFly: false,
      color: Color.green,
    },
  ];

  toggle(): void {
    this.isUpper = !this.isUpper;
  }

  changeOrder(value: keyof Hero): void {
    this.orderBy = value;
  }
}
