import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { MenuService } from 'src/app/services/menu.service';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  menu: Menu = {
      id: '',
      titulo: '',
      descripcion: '',
      precio: 0,
      imageUrl: ''
  }

  constructor(private menuService: MenuService,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
              
  } 

  edit: boolean = false;
  

  

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"]; 
    this.menuService.getMenuId(id)
      .subscribe(
            res => {
              console.log(res)
              this.menu = res
            })
    
  }
  


  createMenu() {
    this.menuService.createMenu(this.menu) 
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/admin'])
          this.edit = false
        }
      )    
  }

  updateMenu() {
    const id: string = this.activatedRoute.snapshot.params['id'];
    this.menuService.updateMenu(id, this.menu)
      .subscribe(
        res => {
          console.log(res)
          this.edit = true
          this.router.navigate(['/admin'])
        },
        err => console.log(err) 
      )
  }
}
