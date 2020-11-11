import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {EstudianteComponent} from './componentes/estudiante/estudiante.component';
import {ProfesorComponent} from './componentes/profesor/profesor.component';

const routes: Routes = [
  {path: 'estudiante', component: EstudianteComponent},
  {path: 'profesor', component: ProfesorComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
