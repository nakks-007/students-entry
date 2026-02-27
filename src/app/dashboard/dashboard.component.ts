import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'
import { StudentTableComponent } from '../students-table/students-table.component';
import { StudentRecordsComponent } from '../student-records/student-records.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTabsModule, StudentTableComponent, StudentRecordsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
