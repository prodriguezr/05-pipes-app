import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower = 'pablo';
  public nameUpper = 'PABLO';
  public fullname = 'pAbLO RodRIgUeZ';
  public customDate: Date = new Date();
}
