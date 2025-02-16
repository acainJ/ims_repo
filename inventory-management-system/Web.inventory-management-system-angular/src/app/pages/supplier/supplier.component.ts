import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../services/supplier.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supplier',
  imports: [CommonModule],
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.css'
})
export class SupplierComponent implements OnInit {
  suppliers: any[] = [];

    constructor(private supplierService: SupplierService) {}
  
  ngOnInit(): void {
    this.fetchSuppliers();

  }

  fetchSuppliers(): void {
    this.supplierService.getSuppliers().subscribe((data) => {
      this.suppliers = data;
    }, (error) => {
      console.error('Error fetching suppliers:', error);
    });
  }

}
