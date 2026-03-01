import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { StudentsRecords } from '../state/students-records.model';
import { AppState, selectAllStudents, selectStudentById } from '../state/students-selectors';
import * as Actions from '../state/students-records.action';
import { MatInput, MatInputModule } from "@angular/material/input";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-students-table',
    standalone: true,
    imports: [MatTableModule, MatInput, FormsModule, FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule],
    templateUrl: './students-table.component.html',
    styleUrl: './students-table.component.scss'
})

export class StudentTableComponent implements OnInit {
    dataSource: any = [];
    dataSource$: Observable<StudentsRecords[]> = this.store.select(selectAllStudents);
    displayColumns: string[] = ['name', 'city', 'country', 'subject', 'passportDeclaration', 'fitnessDeclaration', 'courseName', 'date', 'state', 'subjects', 'street', 'email', 'phone', 'postalCode'];
    studentsControl: FormControl = new FormControl();
    @Output() switchTab = new EventEmitter<number>();

    constructor(private store: Store<AppState>) {
        this.store.dispatch(Actions.callStudentsRecordsApi());
    }

    ngOnInit(): void {
        this.dataSource$.subscribe(
            (res: any) => {
                this.dataSource = res;
            }
        );

        this.studentsControl.valueChanges.subscribe(
            (value: number) => {
                const studentsRecord = this.store.select(selectStudentById(value));
                studentsRecord.subscribe(
                    (res: any) => {
                        this.dataSource = [res];
                        console.log([res], 'Selected Record');
                    }
                );
            }
        );
    }

    printData(id: string) {
        console.log(id, 'Selected');
        this.switchTab.emit(1);

    }
}