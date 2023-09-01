import { Component } from '@angular/core';

interface IPizzas {
  nombre: string;
  ingrediente: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    nav = ['INICIO','MENU','PEDIDO','ACERCA DE'];
    pizzas: IPizzas[] = [
      {
        nombre: "muzza",
        ingrediente: "queso, cebolla"
      },
      {
        nombre: "napolitana",
        ingrediente: "queso, tomate"
      },
      {
        nombre: "pepperoni",
        ingrediente: "milan, queso"
      }
    ]
}
