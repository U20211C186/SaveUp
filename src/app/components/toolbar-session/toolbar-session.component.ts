import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar-session',
  templateUrl: './toolbar-session.component.html',
  styleUrls: ['./toolbar-session.component.css']
})
export class ToolbarSessionComponent {
  searchText: string = '';

  search() {
    // Lógica para realizar la búsqueda con el texto ingresado
    console.log('Texto de búsqueda:', this.searchText);
  }
}
