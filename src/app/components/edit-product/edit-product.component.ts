import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  productForm!: FormGroup;
  toolbarDisabled: boolean = true;
  imageSelected: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.generateReactiveForm();
  }

  generateReactiveForm(): void {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      marca: ['', [Validators.required]],
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
  }

  onSubmit(): void {
    //this.router.navigate(['/home']);
  }
}
