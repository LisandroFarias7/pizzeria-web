import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { MainComponent } from './main/main.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './admin/edit/edit.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
 {
  path: 'inicio',
  component: InicioComponent
 },
 {
  path: '',
  component: InicioComponent
 },
 {
  path: 'menu',
  component: MainComponent
 },
 {
  path: 'pedidos',
  component: PedidosComponent
 },
 {
  path: 'admin',
  component: AdminComponent
 },
 {
  path: 'admin/edit',
  component: EditComponent
 },
 {
  path: 'admin/edit/:id',
  component: EditComponent
 },
 {
  path: 'about',
  component: AcercaDeComponent
 },
 {
  path: 'lista',
  component: RegistroComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
