import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component',
  imports: [CommonModule],
  templateUrl: './component.component.html',
  styleUrl: './component.component.css'
})
export class ComponentComponent implements OnInit{
    components: any[] = [];
  
      constructor(private componentService: ComponentService) {}
    
    ngOnInit(): void {
      this.fetchComponents();
  
    }
  
    fetchComponents(): void {
      this.componentService.getComponents().subscribe((data) => {
        this.components = data;
      }, (error) => {
        console.error('Error fetching components:', error);
      });
    }
  
}
