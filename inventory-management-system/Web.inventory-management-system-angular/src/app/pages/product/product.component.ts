import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  newProduct = { product_name: '', quantity_on_hand: '' };
  editMode = false;
  selectedProduct: any = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addProduct(): void {
    this.productService.addProduct(this.newProduct).subscribe(
      (response) => {
        this.products.push(response);
        this.newProduct = { product_name: '', quantity_on_hand: '' };
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }

  editProduct(product: any): void {
    this.editMode = true;
    this.selectedProduct = { ...product };
  }

  updateProduct(): void {
    if (!this.selectedProduct) return;

    this.productService.updateProduct(this.selectedProduct.product_id, this.selectedProduct).subscribe({
      next: (updatedProduct) => {
        const index = this.products.findIndex(p => p.product_id === updatedProduct.product_id);
        if (index !== -1) {
          this.products[index] = { ...updatedProduct };
        }
        this.editMode = false;
        this.selectedProduct = null;
      },
      error: (err) => console.error('Error updating product:', err)
    });
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id).subscribe(
      () => {
        this.products = this.products.filter(p => p.product_id !== id);
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }
}
