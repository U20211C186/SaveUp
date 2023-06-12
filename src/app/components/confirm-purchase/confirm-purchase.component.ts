import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HistoryService } from 'src/app/services/history.service';
import {Router } from '@angular/router'

@Component({
  selector: 'app-confirm-purchase',
  templateUrl: './confirm-purchase.component.html',
  styleUrls: ['./confirm-purchase.component.css']
})
export class ConfirmPurchaseComponent {
  constructor(@Inject(HistoryService) private historyService: HistoryService,private router:Router) { }

  ngOnInit(): void {
  }
  nombre = new FormControl('', [Validators.required]);
  apellido = new FormControl('', [Validators.required]);
  direccion = new FormControl('', [Validators.required]);
  departamento = new FormControl('', [Validators.required]);
  distrito = new FormControl('', [Validators.required]);
  telefono = new FormControl('', [Validators.required]);
  tarjeta = new FormControl('', [Validators.required]);


  onSubmit() {
    const nombreValue = this.nombre.value;
    const apellidoValue = this.apellido.value;
    const direccionValue = this.direccion.value;
    const departamentoValue = this.departamento.value;
    const distrtitoValue = this.distrito.value;
    const telefonoValue = this.telefono.value;
    const tarjetaValue = this.tarjeta.value;
    const userIdValue = 2;
    const productIdValue = 3;
  
    const newItem = {
      nombre:nombreValue,
      apellido:apellidoValue,
      direccion: direccionValue,
      departamento:departamentoValue,
      distrtito:distrtitoValue,
      telefono: telefonoValue,
      tarjeta:tarjetaValue,
      user_id:userIdValue,
      product_id:productIdValue
    };
  
    this.historyService.createItem(newItem).subscribe(
      response => {
        console.log("Registro agregado exitosamente");
        this.router.navigate(['/products']);
        this.nombre.reset();
        this.apellido.reset();
        this.direccion.reset();
        this.departamento.reset();
        this.distrito.reset();
        this.telefono.reset();
        this.tarjeta.reset(); 
      },
      error => {
        console.log("Ocurrió un error al agregar el registro");
        console.log(error);
      }
    );
  }
}