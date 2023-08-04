import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductService } from 'src/app/services/product.service';

@NgModule({
  declarations: [],
  providers: [ProductService],
  imports: [CommonModule],
})
export class ProductsModule {}
