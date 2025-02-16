import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../services/supplier.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-supplier',
  imports: [CommonModule,FormsModule],
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.css'
})
export class SupplierComponent implements OnInit {
  suppliers: any[] = [];
  newSupplier = { supplier_name: '', contact_info: '' };
  editMode = false;
  selectedSupplier: any = null;

  constructor(private supplierService: SupplierService) {}

  ngOnInit(): void {
    this.fetchSuppliers();
  }

  fetchSuppliers(): void {
    this.supplierService.getSuppliers().subscribe(
      (data) => {
        this.suppliers = data;
      },
      (error) => {
        console.error('Error fetching suppliers:', error);
      }
    );
  }

  addSupplier(): void {
    this.supplierService.addSupplier(this.newSupplier).subscribe(
      (response) => {
        this.suppliers.push(response);
        this.newSupplier = { supplier_name: '', contact_info: '' };
      },
      (error) => {
        console.error('Error adding supplier:', error);
      }
    );
  }

  editSupplier(supplier: any): void {
    this.editMode = true;
    this.selectedSupplier = { ...supplier };
  }

  updateSupplier(): void {     
    if (!this.selectedSupplier) {
      return;
    }
    
    this.supplierService.updateSupplier(this.selectedSupplier.supplier_id, this.selectedSupplier)
      .subscribe({
        next: (updatedSupplier) => {
          const index = this.suppliers.findIndex(s => s.supplier_id === updatedSupplier.supplier_id);
          if (index !== -1) {
            this.suppliers[index] = { ...updatedSupplier };
          }
          this.editMode = true;
          this.selectedSupplier = null;  
        },
        error: (err) => console.error('Error updating supplier:', err)
      });
  }  
          
  deleteSupplier(id: string): void {
    this.supplierService.deleteSupplier(id).subscribe(
      () => {
        this.suppliers = this.suppliers.filter(s => s.supplier_id !== id);
      },
      (error) => {
        console.error('Error deleting supplier:', error);
      }
    );
  }
}
