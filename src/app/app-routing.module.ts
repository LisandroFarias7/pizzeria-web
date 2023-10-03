import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { MainComponent } from './main/main.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './admin/edit/edit.component';


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
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
