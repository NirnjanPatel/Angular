import { Component,Input,Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/products';
//  @Input() decorator indicates that the property value passes in from the component's parent, 

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
@Input() product! : Product;
// @Input() product : Product | undefined;
@Output() notify = new EventEmitter();

// constructor(), the OnInit interface, and the ngOnInit() method

}

// Use in components with the @Output directive to emit custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance.
