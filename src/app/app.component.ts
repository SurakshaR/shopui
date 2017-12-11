import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { rateService } from "./app.service";
import { Router, NavigationEnd } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[rateService]
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.navigate(['home']);
  }
 
 
}
