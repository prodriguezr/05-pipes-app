import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // i18nSelect
  public name: string = 'Pablo';
  public gender: 'male' | 'female' = 'male';
  public clients: string[] = [
    'Magdalena',
    'Daniel',
    'María Jose',
    'Pablo',
    'Jaime',
    'Bassam',
    'Max',
  ];

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  public clientsMap = {
    '=0': 'no existen clientes esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  changePerson(): void {
    this.name = 'Romina';
    this.gender = 'female';
  }

  deleteClient(): void {
    this.clients.pop();
  }

  // KeyValue Pipe
  public person = {
    name: 'Pablo',
    age: 49,
    address: 'Santiago, Chile',
  };

  // Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap: ', value))
  );
}
