import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent  {

  submit(login:any) {
    console.log("Form submitted",login)
  }

  constructor(private router: Router) { }
  
  submitDetails() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}
