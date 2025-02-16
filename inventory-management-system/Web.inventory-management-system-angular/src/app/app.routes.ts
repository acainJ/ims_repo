import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { ComponentComponent } from './pages/component/component.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'supplier', component: SupplierComponent },
    { path: 'component', component: ComponentComponent },
    { path: 'product', component: ProductComponent }, // Replace with an About component later
];
