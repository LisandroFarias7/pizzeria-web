import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Menu } from '../interfaces/menu';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

    public menu: Menu[] = [];
    
    constructor(private menuServices: MenuService, private toastr: ToastrService ) {
      
    }
    async ngOnInit(): Promise<void>{
      this.getAll()
    }


    async getAll() {
      (await this.menuServices.getMenu())
        .subscribe(
          res => {
            console.log(res)
            this.menu = res
          },
          err => console.log(err)
        )
    }

    async getMenuID(id: string) {
      (await this.menuServices.getMenuId(id))
        .subscribe(
          res => {
            console.log(res)
          },
          err => console.log(err)
        )
    }

    async deleteMenu(id: string) {
      (await this.menuServices.deleteMenu(id))
        .subscribe(
          res => {
            this.getAll()
            this.toastr.success('Creado correctamente', 'Succefully');
          }
        )
    } 

}
