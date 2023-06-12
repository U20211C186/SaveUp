import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra-exitosa',
  templateUrl: './compra-exitosa.component.html',
  styleUrls: ['./compra-exitosa.component.css']
})
export class CompraExitosaComponent implements OnInit{
  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/products']); // Navegar a la página de inicio después de 5 segundos
    }, 3000);
  }
}
