import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-check-in-company',
  templateUrl: './check-in-company.component.html',
  styleUrls: ['./check-in-company.component.css']
})
export class CheckInCompanyComponent {
  constructor(private userService:UserService, private router: Router) { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  departament = new FormControl('', [Validators.required]);
  district = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  userName = new FormControl('', [Validators.required]);


  onSubmit() {
    const emailValue = this.email.value;
    const nameValue = this.name.value;
    const lastNameValue = this.lastName.value;
    const addressValue = this.address.value;
    const departamentValue = this.departament.value;
    const districtValue = this.district.value;
    const phoneNumberValue = this.phoneNumber.value;
    const passwordValue = this.password.value;
    const userNameValue = this.userName.value;
  
    const user = {
      email:emailValue,
      name: nameValue,
      lastName:lastNameValue,
      address:addressValue,
      departament: departamentValue,
      district:districtValue,
      phoneNumber: phoneNumberValue,
      password:passwordValue,
      userName:userNameValue,
      isUserAdmin:true,
    };
  
    /*
    this.userService.añadirUsuario(user).subscribe(
      
      (data)=>{
        console.log(data);
        alert("Usuario registrado");
      },(error)=>{
        console.log(error);
        alert("Ocurrió un error al registrar el usuario");
      }
    )
    */

  }
  
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.email.hasError('email') ? 'No es un correo electrónico válido' : '';
  }
}
