import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {CustomersList2Component} from './components/customers-list/customers-list.component';
import {PaginationComponent} from './components/composition/pagination/pagination.component';
import {ListComponent} from './components/composition/list/list.component';
import {CustomerComponent} from './components/composition/customer/customer.component';
import {CustomersListComponent} from './components/composition/customers-list/customers-list.component';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import { EstudianteComponent } from './componentes/estudiante/estudiante.component';
import { ProfesorComponent } from './componentes/profesor/profesor.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomersList2Component,
    CustomersListComponent,
    PaginationComponent,
    ListComponent,
    CustomerComponent,
    EstudianteComponent,
    ProfesorComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
