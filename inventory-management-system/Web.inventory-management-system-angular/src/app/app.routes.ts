import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SupplierComponent } from './pages/supplier/supplier.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'supplier', component: SupplierComponent },
//   { path: 'inventory', component: InventoryListComponent },
//   { path: 'about', component: InventoryListComponent }, // Replace with an About component later
];
