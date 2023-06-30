import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { UserService } from 'src/app/services/user.service';
import { PaymentService } from 'src/app/services/payment.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-session',
  templateUrl: './login-session.component.html',
  styleUrls: ['./login-session.component.css']
})
export class LoginSessionComponent {

  hide = true;
  validateForm!:FormGroup;

  constructor (
    private userService: UserService, 
    private router: Router, 
    private authService: AuthService, 
    private paymentService: PaymentService,
    private orderService: OrderService, 
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.validateForm=this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
    
    console.log(this.userService.getCustomers().subscribe())
  }

  login() {
    const emailValue = this.validateForm.get('email')?.value;
    const passwordValue = this.validateForm.get('password')?.value;

    console.log('Email:', emailValue);
    console.log('Password:', passwordValue);
  
    if (!this.validateForm.get('email')?.value || !this.validateForm.get('password')?.value) {
      // Al menos uno de los campos es inválido, mostrar mensajes de error
      this.validateForm.get('email')?.markAsTouched();
      this.validateForm.get('password')?.markAsTouched();
      return;
    }

    
    this.userService.getCustomerByEmailAndPassword(emailValue, passwordValue).subscribe(
      (customer: any) => {
        if (customer) {
          this.authService.setUser(customer);
          console.log(this.authService.getUser().name);

          this.paymentService.createPayment().subscribe(
            (payment: any) => {
              this.orderService.createOrder(payment.id).subscribe(
                (order: any) => {
                  this.authService.setOrder(order);
                  console.log(this.authService.getOrder());
                }
              )
            }
          );

          this.router.navigate(['/products']);

        } else {
          this.userService.getCompanyByEmailAndPassword(emailValue, passwordValue).subscribe(
            (company: any) => {
              if (company) {
                this.authService.setUser(company);
                console.log(this.authService.getUser().name);
                this.router.navigate(['/view/products']); 

              } else {

                alert('Usuario o contraseña incorrectos');
              }
            },
            error => {
              console.log("Ocurrió un error al obtener las compañías");
              console.log(error);
            }
          );
        }
      }
    );
  }  

  /*
  getErrorMessageEmail() {
    if(this.email.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return '';
  }

  getErrorMessagePassword() {
    if(this.password.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return '';
  }
  */
}

/*
import { Component } from '@angular/core';
import {FormControl, Validators,FormGroup, FormBuilder} from '@angular/forms';
import { HttpDataServiceService } from 'src/app/services/http-data.service.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services/auth-service/auth.service';


@Component({
  selector: 'app-login-session',
  templateUrl: './login-session.component.html',
  styleUrls: ['./login-session.component.css']
})
export class LoginSessionComponent {
  hide = true;
  validateForm!:FormGroup;
  constructor(private authService:AuthService,private fb:FormBuilder) { }
  ngOnInit() {
    this.validateForm=this.fb.group({
      userName:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  /*
  login(){
    console.log(this.validateForm.value);
   this.authService.login(this.validateForm.value).subscribe((res)=>{ 
      console.log(res);
    })
  }

  submitAndRegister() {
    this.ngOnInit();
    this.login();
  }
  
}
*/
/*
@Component({
  selector: 'app-login-session',
  templateUrl: './login-session.component.html',
  styleUrls: ['./login-session.component.css']
})
export class LoginSessionComponent {
  hide = true;
  user: any; // Declaración de la variable user

  constructor(private authService:AuthService) { }
  ngOnInit(): void {
  }

  password = new FormControl('', [Validators.required]);
  userName = new FormControl('', [Validators.required,Validators.email]);

  onSubmit() {
    const passwordValue = this.password.value;
    const userNameValue = this.userName.value;
  
    if (!userNameValue || !passwordValue) {
      // Si el formulario no está inicializado o los valores son nulos, no hacer nada
      alert("Ingrese su cuenta y/o contraseña.");
      return;
    }

    this.user = {
      userName: userNameValue,
      password:passwordValue,
    };


    
  }
  
  login(){
    console.log(this.user);
    this.authService.login(this.user).subscribe((res)=>{
     console.log(res);
    })
  }


  submitAndRegister() {
    this.onSubmit();
    this.login();
  }
  
  
} */







/*
 import { Component } from '@angular/core';
import {FormControl, Validators,FormGroup} from '@angular/forms';
import { HttpDataServiceService } from 'src/app/services/http-data.service.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { take } from 'rxjs';


@Component({
  selector: 'app-login-session',
  templateUrl: './login-session.component.html',
  styleUrls: ['./login-session.component.css']
})
export class LoginSessionComponent {
  hide = true;

  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private router:Router,private loginService:LoginService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    const userNameValue = this.form.get('userName')?.value;
    const passwordValue = this.form.get('password')?.value;
  
    if (!userNameValue || !passwordValue) {
      // Si el formulario no está inicializado o los valores son nulos, no hacer nada
      alert("Ingrese su cuenta y/o contraseña.");
      return;
    }

    const loginData = {
      userName: userNameValue,
      password: passwordValue
    }



    this.loginService.generateToken(loginData).subscribe(
      (data: any) => {
        console.log(data);
        this.router.navigate(['/products']);
        
      },
      (error: any) => {
        console.log(error);
        alert("Ocurrió un error al iniciar sesión");
      }
    );
    
    
  }
  
  
  
  
}
*/