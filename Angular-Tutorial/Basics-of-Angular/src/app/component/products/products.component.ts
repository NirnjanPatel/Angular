import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: any[] = [];
  constructor(
    private productService: ProductService,
    public cartService: CartService
  ) {}
  ngOnInit(): void {
    this.products = this.productService.products;
  }
}
