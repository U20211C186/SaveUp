import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SaveUpService } from 'src/app/services/save-up.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  userForm!:FormGroup;
  userData!:User;
  id: number = 0;

  constructor(
    private FormBuilder: FormBuilder,
    //private route:ActivatedRoute,
    private router: Router,
    private service: SaveUpService
  ){}

  ngOnInit(): void {
    this.generateReactiveForm();
    this.id = 1;
    this.service.getUserId(this.id).subscribe((data)=>{
      this.userData = data;
      console.log(data);
      this.userForm.patchValue({
        nombre: this.userData.nombre,
        apellido: this.userData.apellido,
        email: this.userData.email,
        departamento: this.userData.departamento,
        distrito: this.userData.distrito,
        celular: this.userData.celular,
        password: this.userData.password
      })
      console.log(data);
    })
    
    
  }

  generateReactiveForm():void{
    this.userForm = this.FormBuilder.group({
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      departamento:[''],
      distrito:[''],
      celular:[''],
      password:['', Validators.required],
    })
  }

  updateUser(){
    if (this.userForm.invalid){
      console.log('Formulario Invalido')
    }
    else {
      const user:User = {
        id:this.userData.id,
        nombre:this.userForm.get('nombre')?.value,
        apellido:this.userForm.get('apellido')?.value,
        email:this.userForm.get('email')?.value,
        departamento:this.userForm.get('departamento')?.value,
        distrito:this.userForm.get('distrito')?.value,
        celular:this.userForm.get('celular')?.value,
        password:this.userForm.get('password')?.value,
        imagen:this.userData.imagen,
      }
      this.service.updateUser(user.id!,user).subscribe(
        (response)=>(
        console.log(response),
        this.cancelEdit()
      ))
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(){
    this.updateUser();
  }

  cancelEdit(){
    this.router.navigate(['/products']);
  }
}
