import { Component } from '@angular/core';
import {FormControl, Validators,FormGroup} from '@angular/forms';
import { HttpDataServiceService } from 'src/app/services/http-data.service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-session',
  templateUrl: './login-session.component.html',
  styleUrls: ['./login-session.component.css']
})
export class LoginSessionComponent {
  hide = true;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', Validators.required),
  });

  constructor(
    private httpDataService: HttpDataServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    const emailValue = this.form?.get('email')?.value;
    const passwordValue = this.form?.get('contrasena')?.value;
  
    if (!emailValue || !passwordValue) {
      // Si el formulario no está inicializado o los valores son nulos, no hacer nada
      alert("Ingrese su cuenta y/o contraseña.");
      return;
    }
  
    this.httpDataService.getList().subscribe(
      data => {
        // Verificar si el correo electrónico y la contraseña coinciden en la data del archivo JSON
        const userExists = data.some(item => item.email === emailValue && item.contrasena === passwordValue);
  
        if (userExists) {
          // Si el correo electrónico y la contraseña coinciden, redirigir al usuario a /landing
          alert("Inicio de sesion correctamente.");

          this.router.navigate(['/products']);
        } else {
          // Si el correo electrónico y la contraseña no coinciden, mostrar una alerta
          alert("El correo electrónico o la contraseña son incorrectos.");
        }
      },
      error => {
        console.log("Ocurrió un error al obtener la data");
        console.log(error);
      }
    );
  }
  
  
  
  
}
