import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  private apiUrl = 'http://localhost:5001/api/components/'; // Change this to match your Node.js API

  constructor(private http: HttpClient) {}

  // Get all components
  getAllComponents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new component
  addComponent(component: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, component);
  }

  // Update an existing component
  updateComponent(id: string, component: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, component);
  }

  // Delete a component by ID
  deleteComponent(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
