import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent {
  constructor(/*private httpDataService: HttpDataServiceService*/) { }

  email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit(): void {
  }
 


  onSubmit() {
    const emailValue = this.email.value;
    console.log(emailValue);
    if (!emailValue) {
      alert("Por favor ingrese un correo electrónico");
      return;
    }
  
    /*
    this.httpDataService.checkEmail(emailValue).subscribe(
      emailExists => {
        if (emailExists) {
          // Si el correo electrónico existe, enviar el enlace de recuperación
          alert("Enlace de recuperación enviado a " + emailValue);
          this.email.reset();

          
        } else {
          // Si el correo electrónico no existe, mostrar una alerta
          alert("El correo electrónico " + emailValue + " no se encuentra registrado.");
        }
      },
      error => {
        console.log("Ocurrió un error al verificar el correo electrónico");
        console.log(error);
      }
    );
    */
  }

  
  

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.email.hasError('email') ? 'No es un correo electrónico válido' : '';
  }

}
