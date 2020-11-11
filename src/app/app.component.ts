import {Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Estudiante',
        icon: 'pi pi-fw pi-pencil',
        routerLink: 'estudiante',
      },
      {
        label: 'Profesor',
        icon: 'pi pi-fw pi-pencil',
        routerLink: 'profesor'
      }
    ];
  }
}
