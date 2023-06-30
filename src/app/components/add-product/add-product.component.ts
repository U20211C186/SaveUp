import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
/*
export class AddProductComponent {
  base_Url: string = environment.baseURL;

  productForm!: FormGroup;
  toolbarDisabled: boolean = true;
  imageSelected: any;

  base64Image: any;
  imageName: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.generateReactiveForm();
  }

  generateReactiveForm(): void {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      vencimiento: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
    });
  }

  openFileSelector(): void {
    document.getElementById('fileSelector')?.click();
  }

  loadImage(event: any): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageSelected = reader.result;
      const productImage = document.getElementById('productImage') as HTMLImageElement;
      if (productImage) {
        productImage.src = this.imageSelected;
      }
    };
    reader.readAsDataURL(event.target.files[0]);

    this.imageName = event.target.files[0].name;
  }

  onSubmit(): void {
    // Convertir la imagen a base64
    this.base64Image = this.imageSelected.split(',')[1];

    // Guardar la imagen en la base de datos
    this.saveImageToDatabase();
  }

  saveImageToDatabase(): void {
    const requestPayload = {
      name: this.productForm.value.name,
      description: this.productForm.value.descripcion,
      price: this.productForm.value.precio,
      stock: this.productForm.value.stock,
      expirationDate: this.productForm.value.vencimiento,
      imagen: this.base64Image,
    };

    const user = this.authService.getUser();

    this.http
      .post(`${this.base_Url}/companies/${user?.id}/products`, requestPayload)
      .subscribe(
        (response) => {
          console.log('Producto guardado en la base de datos:', response);
          // Continuar con el procesamiento o navegación
        },
        (error) => {
          console.error('Error al guardar el producto en la base de datos:', error);
        }
      );
  }

  getImageName(): string {
    return this.imageName;
  }
}
*/


export class AddProductComponent {
  base_Url: string = environment.baseURL;

  productForm!: FormGroup;
  toolbarDisabled: boolean = true;
  imageSelected: any;
  imageName: string = '';

  imageTrueSelected: any;
  base64String: any;
  varString: string = 'perro.jpg';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.generateReactiveForm();
  }

  generateReactiveForm(): void {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      vencimiento: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
    });
  }

  openFileSelector(): void {
    document.getElementById('fileSelector')?.click();
  }

  loadImage(event: any): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageSelected = reader.result;
      const productImage = document.getElementById('productImage') as HTMLImageElement;
      if (productImage) {
        productImage.src = this.imageSelected;
      }
    };
    reader.readAsDataURL(event.target.files[0]);
    
    this.imageName = event.target.files[0].name;

    this.convertImageToBase64(event.target.files[0]);
  }

  convertImageToBase64(file: File): void {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.base64String = reader.result as string;
      this.imageSelected = this.base64String;
      console.log(this.base64String);
    };
    reader.readAsDataURL(file);
  }
  
  getImageName(): string {
    return this.imageName;
  }

  onSubmit() {
    // Guardar la imagen en la base de datos
    this.saveImageToDatabase();
  }

  saveImageToDatabase() {
    console.log(this.base64String);

    const imagenn = 'hola';

    const valueName = this.productForm.value.name;
    const valueDescripcion = this.productForm.value.descripcion;
    const valuePrice = this.productForm.value.precio;
    const valueStock = this.productForm.value.stock;
    const valueVencimiento = this.productForm.value.vencimiento;

    const requestPayload: any = {
      name: "Perro",
      description: "kssbksbds",
      price: 123.12,
      stock: 1,
      expirationDate: "11-12-2023",
      imagen: ''
    };

    console.log(requestPayload);

    
    this.productService.createProduct(requestPayload).subscribe(
      (response) => {
        console.log('Producto guardado en la base de datos:', response);
        // Continuar con el procesamiento o navegación
      }
    );
  }
}



