import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentTableComponent } from "./students-table/students-table.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, StudentTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'students-entry';
}
