import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { AdminComponent } from './admin/admin.component';
import { FiltroPipe } from './main/pipes/filtro.pipe';
import { EditComponent } from './admin/edit/edit.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    InicioComponent,
    PedidosComponent,
    AdminComponent,
    FiltroPipe,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
