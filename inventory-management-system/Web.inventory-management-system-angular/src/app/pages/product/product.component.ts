import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
    products: any[] = [];
  
      constructor(private productService: ProductService) {}
    
    ngOnInit(): void {
      this.fetchProducts();
  
    }
  
    fetchProducts(): void {
      this.productService.getProducts().subscribe((data) => {
        this.products = data;
      }, (error) => {
        console.error('Error fetching products:', error);
      });
    }
  
}
