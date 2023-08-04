import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world-bindings',
  templateUrl: './hello-world-bindings.component.html',
  styleUrls: ['./hello-world-bindings.component.css']
})
export class HelloWorldBindingsComponent {
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;
  message = 'Hello, World';
 
  sayMessage() {
    alert(this.message);
  }
}
