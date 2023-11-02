import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';  // Importa los módulos necesarios
import { MenuService } from 'src/app/services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  form: FormGroup; // Definimos un FormGroup para el formulario

  constructor(
    private menuService: MenuService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder // Inyecta FormBuilder
  ) {
    this.form = this.formBuilder.group({
    })
  }

  edit: boolean = false;

  async ngOnInit(): Promise<void> {
    const id = this.activatedRoute.snapshot.params['id'];
    this.form = this.formBuilder.group({ // Crea el FormGroup con controles correspondientes
      titulo: [''], // Valores iniciales
      descripcion: [''],
      precio: [0],
      imageUrl: ['']
    });

    (await this.menuService.getMenuId(id)).subscribe(
      res => {
        console.log(res);
        if (res) {
          this.form.setValue({ // Usa setValue para establecer todos los valores
            titulo: res.titulo,
            descripcion: res.descripcion,
            precio: res.precio,
            imageUrl: res.imageUrl
          }); // Establece los valores del formulario con los datos recibidos
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  async createMenu() {
    const formData = this.form.value; // Obtén los valores del formulario
    (await this.menuService.createMenu(formData)).subscribe(
      res => {
        console.log(formData);
        this.router.navigate(['/admin']);
        this.edit = false;
        this.toastr.success('Creado correctamente', 'Succefully');
      }
    );
  }

  async updateMenu() {
    const id = this.activatedRoute.snapshot.params['id'];
    const formData = this.form.value; // Obtén los valores del formulario
    (await this.menuService.updateMenu(id, formData)).subscribe(
      res => {
        console.log(formData);
        this.edit = true;
        this.router.navigate(['/admin']);
        this.toastr.success('Editado correctamente', 'Succefully');
      },
      err => console.log(err)
    );
  }
}
