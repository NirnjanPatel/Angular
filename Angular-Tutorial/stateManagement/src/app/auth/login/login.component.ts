import { Component } from '@angular/core';
import { LoginForm } from '../auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public user: any[] = [];

  form: LoginForm = {
    email: '',
    password: '',
  };
  submit() {
    console.log('login -->> ', this.form);
  }
}
