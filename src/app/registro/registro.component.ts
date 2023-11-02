import { Component, OnInit } from '@angular/core';
import { ClientData } from '../interfaces/client';
import { ClientService } from '../services/client.service';
import { Menu } from '../interfaces/menu';
import { OrderService } from '../services/order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

    listClient: ClientData[] = [] 
    listPedido: Menu[] = []

    constructor(private clientService: ClientService,
                private orderService: OrderService,
                private toastr: ToastrService) {

    }

    ngOnInit(): void {
      this.getClients()
      this.getOrders()
    }

    async getClients() {
      (await this.clientService.getClients())
        .subscribe(
          res => {
            console.log(res)
            this.listClient = res

          },
          err => {
            console.log(err)
          }
        )
         
    }

    async getOrders(){
      (await this.orderService.getOrders()).subscribe(res => {
        console.log(res)
        this.listPedido = res
      },
      err => {
        console.log(err)
      })
    }

    async deleteOrder(id: string) {
      (await this.orderService.deleteOrder(id).subscribe(
        res => {
          console.log(res)
          this.getOrders()
          this.toastr.success('Envio listo', 'Eliminado con exito');

        }
      ))
    }

    async deleteClient(id: string) {
      (await this.clientService.deleteClient(id).subscribe(res =>{
        console.log(res)
        this.getClients()
        this.toastr.success('Envio listo', 'Eliminado con exito');
      }))
    }
 }
