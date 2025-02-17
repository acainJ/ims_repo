import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './component.component.html',
  styleUrl: './component.component.css'
})
export class ComponentComponent implements OnInit {
  components: any[] = [];
  newComponent = { component_name: '', description: '',  supplier_id: null};
  editMode = false;
  selectedComponent: any = null;
  suppliers : any [] = [];

  constructor(private componentService: ComponentService, private supplierService: SupplierService) {}

  ngOnInit(): void {
    this.fetchComponents();
    this.fetchSuppliers();
  }

  fetchComponents(): void {
    this.componentService.getAllComponents().subscribe(
      (data) => {
        this.components = data;
          console.log(data)
      },
      (error) => {
        console.error('Error fetching components:', error);
      }
    );
  }

  addComponent(): void {
    this.componentService.addComponent(this.newComponent).subscribe(
      (response) => {
        this.components.push(response);
        this.newComponent = { component_name: '', description: '', supplier_id: null};
        this.fetchComponents();
      },
      (error) => {
        console.error('Error adding component:', error);
      }
    );
  }
  

  editComponent(component: any): void {
    this.editMode = true;
    this.selectedComponent = { ...component };
  }

  updateComponent(): void {
    if (!this.selectedComponent) {
      return;
    }

    this.componentService.updateComponent(this.selectedComponent.component_id,this.selectedComponent).subscribe({
      next: (updatedComponent) => {
        const index = this.components.findIndex((c) => c.component_id === updatedComponent.component_id);
        if (index !== -1) {
          // updatedComponent.supplier = this.components[index].supplier || null;
          this.components[index] = { ...updatedComponent };
        }
        this.fetchComponents()
        this.editMode = false;
        this.selectedComponent = null;
      },
      error: (err) => console.error('Error updating product:', err)
    });
  }

  deleteComponent(id: string): void {
    this.componentService.deleteComponent(id).subscribe(
      () => {
        this.components = this.components.filter((c) => c.id !== id);
      },
      (error) => {
        console.error('Error deleting component:', error);
      }
    );
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
}
