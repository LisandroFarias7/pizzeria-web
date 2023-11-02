import { Component, OnInit } from '@angular/core';
import { ClientData } from '../interfaces/client';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  client: FormGroup;

  constructor(private fb: FormBuilder, 
              private clientService:ClientService,
              private toastr: ToastrService,
              private router: Router) {
    this.client = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: [''],
      address: [''],
    });
  }

  ngOnInit(): void {}

  registerUser() {
    const DataClient = this.client.value
    this.clientService.createClient(DataClient)
      .subscribe(
        res =>{
          console.log(res)
          this.toastr.success('Pedidos enviado exito', 'Le llegará un sms por whatsapp'),
          this.router.navigate(['/menu'])
        },
        err => {
          console.log(err)
        }
      )
  }
}
