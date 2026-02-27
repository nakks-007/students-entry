import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-student-records',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './student-records.component.html',
  styleUrl: './student-records.component.scss'
})
export class StudentRecordsComponent {

  studentDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentDetailsForm = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      passportDeclaration: ['', Validators.required],
      fitnessDeclaration: ['', Validators.required],
      courseName: ['', Validators.required],
      subjects: ['', Validators.required],
      date: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      address2: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      zip: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.studentDetailsForm.valid) {
      console.log(this.studentDetailsForm.value);
    }
  }
}