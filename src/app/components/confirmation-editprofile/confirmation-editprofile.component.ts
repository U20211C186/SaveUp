import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-editprofile',
  templateUrl: './confirmation-editprofile.component.html',
  styleUrls: ['./confirmation-editprofile.component.css']
})
export class ConfirmationEditprofileComponent {
  constructor(private location: Location,private router:Router) {}

  toolbarDisabled: boolean = true;
  
  public logout() {
    this.router.navigate(['/edit/profile']); 
  }

  cancelar() {
    this.location.back();
  }
}
