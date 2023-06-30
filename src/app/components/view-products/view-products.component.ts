import { Component } from '@angular/core';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent {
  searchText: string = '';
  filteredProducts: any[] = [];

  search() {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  products = [
    { name: 'Shiba Inu', date: '2023-06-24', price: 99.99, stock: 10 },
    { name: 'Poodle', date: '2023-06-25', price: 129.99, stock: 5 },
    { name: 'Labrador Retriever', date: '2023-06-26', price: 149.99, stock: 2 },
    { name: 'Labrador Retriever', date: '2023-06-26', price: 149.99, stock: 2 },

    { name: 'Labrador Retriever', date: '2023-06-26', price: 149.99, stock: 2 },

    // Agrega más objetos de producto según sea necesario
  ];
}
