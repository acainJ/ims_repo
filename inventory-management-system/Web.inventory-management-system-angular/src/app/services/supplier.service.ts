import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  private apiUrl = 'http://localhost:5001/api/suppliers/'; // Change this to match your Node.js API

  constructor(private http: HttpClient) {}

  // Get all suppliers
  getSuppliers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new supplier
  addSupplier(supplier: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, supplier);
  }

  // Update an existing supplier
  updateSupplier(supplier_id: number, supplierData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${supplier_id}`, supplierData);
  }

  // Delete a supplier by ID
  deleteSupplier(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
