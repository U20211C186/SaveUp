import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpDataServiceService } from 'src/app/services/http-data.service.service';
import {Router } from '@angular/router'
@Component({
  selector: 'app-check-in-company',
  templateUrl: './check-in-company.component.html',
  styleUrls: ['./check-in-company.component.css']
})
export class CheckInCompanyComponent {
  constructor(private httpDataService: HttpDataServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  nombre = new FormControl('', [Validators.required]);
  ruc = new FormControl('', [Validators.required]);
  direccion = new FormControl('', [Validators.required]);
  departamento = new FormControl('', [Validators.required]);
  distrito = new FormControl('', [Validators.required]);
  celular = new FormControl('', [Validators.required]);
  contrasena = new FormControl('', [Validators.required]);
  repetircontra = new FormControl('', [Validators.required]);


  onSubmit() {
    const emailValue = this.email.value;
    const nombreValue = this.nombre.value;
    const rucValue = this.ruc.value;
    const direccionValue = this.direccion.value;
    const departamentoValue = this.departamento.value;
    const distrtitoValue = this.distrito.value;
    const celularValue = this.celular.value;
    const contrasenaValue = this.contrasena.value;
    const repetircontraValue = this.repetircontra.value;
  
    const newItem = {
      email: emailValue,
      nombre:nombreValue,
      ruc:rucValue,
      direccion: direccionValue,
      departamento:departamentoValue,
      distrtito:distrtitoValue,
      celular: celularValue,
      contrasena:contrasenaValue,
      repetircontra:repetircontraValue
    };
  
    this.httpDataService.createItem(newItem).subscribe(
      response => {
        console.log("Registro agregado exitosamente");
        this.router.navigate(['/products']);
        this.email.reset();
        this.nombre.reset();
        this.ruc.reset();
        this.direccion.reset();
        this.departamento.reset();
        this.distrito.reset();
        this.celular.reset();
        this.contrasena.reset();
        this.repetircontra.reset();        
      },
      error => {
        console.log("Ocurrió un error al agregar el registro");
        console.log(error);
      }
    );
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.email.hasError('email') ? 'No es un correo electrónico válido' : '';
  }
}
