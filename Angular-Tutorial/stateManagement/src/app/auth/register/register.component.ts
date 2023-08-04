import { Component } from '@angular/core';
import { registerForm } from '../auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form: registerForm = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  submit() {
    console.log('register -->> ', this.form);
  }
}
