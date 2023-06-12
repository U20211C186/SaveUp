import { Component, OnInit } from '@angular/core';
import { SaveUpService } from 'src/app/services/save-up.service';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{
  products:Products[]=[];
  selectedProducts:Products[]=[];
  productQuantities:{[key:string]:number} ={};
  totalSum: number = 0;
  availablePoints: number = 70;
  pointNecessary: number = 50;
  totalWithDiscount: number = 0;
  showDiscountedTotal: boolean = false;

  constructor(private SaveUpService: SaveUpService){}

  ngOnInit(): void {
    this.selectRandomProducts(5);
  
  }

  selectRandomProducts(count: number){
    this.SaveUpService.getProducts().subscribe(
      (products)=>{
    this.products = products;
    const uniqueProducts: Products[]=[];

    while(uniqueProducts.length < count){
      const randomIndex = Math.floor(Math.random()*this.products.length);
      const randomProduct = this.products[randomIndex];

      if(!this.productExists(uniqueProducts, randomProduct)){
        uniqueProducts.push(randomProduct);
      }
    }
    this.selectedProducts = uniqueProducts;
    console.log(this.selectedProducts);
    this.calculateTotalSum();
    })
  }
  productExists(products: Products[], product: Products): boolean {
    return products.some(p => p.name === product.name);
  }

  increaseQuantity(productId: number) {
    if (this.productQuantities[productId]) {
      this.productQuantities[productId]++;
    } else {
      this.productQuantities[productId] = 2;
    }
    this.calculateTotalSum();
  }
  decreaseQuantity(productId: number) {
    if (this.productQuantities[productId] && this.productQuantities[productId] > 1) {
      this.productQuantities[productId]--;
    }
    this.calculateTotalSum();
  }
  calculateTotalSum() {
    this.totalSum = 0;
    this.selectedProducts.forEach(product => {
      const quantity = this.productQuantities[product.id] || 1;
      this.totalSum += product.precio * quantity;
      console.log(this.totalSum);
    });
    console.log(this.totalSum);
  }
  removeProduct(product: Products) {
    const index = this.selectedProducts.indexOf(product);
    if (index !== -1) {
      const deletedProduct = this.selectedProducts.splice(index, 1)[0];
      this.totalSum -= deletedProduct.precio * (this.productQuantities[deletedProduct.id] || 0);
      delete this.productQuantities[deletedProduct.id];
    }
    this.calculateTotalSum();
  }
  redeemPoints() {
    // Verificar si hay suficientes puntos disponibles para el canje
    if (this.availablePoints >= this.pointNecessary) {
      // Calcular el descuento basado en el porcentaje y el precio original del producto
      const discountPercentage = 25; // Porcentaje de descuento (ejemplo: 25%)
      const discount = this.totalSum * (discountPercentage / 100);

      // Actualizar el precio del producto después de aplicar el descuento
      this.totalWithDiscount = this.totalSum - discount;
      this.totalWithDiscount = +this.totalWithDiscount.toFixed(2);

      // Restar la cantidad de puntos utilizados en el canje
      this.availablePoints -= this.pointNecessary;
    }
    this.showDiscountedTotal = true;
    console.log(this.totalWithDiscount);
  }


  /*getProducts() {
    this.SaveUpService.getProducts().subscribe(
      (products)=>{
        this.products=products;
      console.log(this.products);
    },
    (error)=> {
      console.error(error);
    }
    )
  };*/

  /*getProductById(id: number) {
    this.SaveUpService.getUserId(id).subscribe(
      (product) => {
       console.log(product);
      },
      (error) => {
        console.error(error);
      }
    );
  }*/

}
