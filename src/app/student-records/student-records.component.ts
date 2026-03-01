import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { addStudent, updateStudent } from '../state/students-records.action';
import { Store } from '@ngrx/store';
import { AppState, selectStudentById } from '../state/students-selectors';

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
  @Input() studentId: number | null = null;
  isEditMode = false;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
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
      postalCode: ['', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['studentId'] && this.studentId) {
      this.isEditMode = true;

      this.store.select(selectStudentById(this.studentId))
        .subscribe(student => {
          if (student) {
            this.studentDetailsForm.patchValue(student);
          }
        });
    }
  }

  onSubmit() {
    if (this.studentDetailsForm.valid) {

      const studentData = {
        ...this.studentDetailsForm.value,
        id: this.studentId
      };

      if (this.isEditMode) {
        console.log(studentData);
        this.store.dispatch(updateStudent({ student: studentData }));
      } else {
        this.store.dispatch(addStudent({ student: studentData }));
      }

      this.studentDetailsForm.reset();
      this.isEditMode = false;
    }
  }
}