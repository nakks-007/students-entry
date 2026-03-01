import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StudentsRecords } from "../state/students-records.model";

@Injectable({
    providedIn: 'root'
})

export class StudentsRecordsService {
    constructor(
        private http: HttpClient
    ) { }

    getStudentsRecords() {
        return this.http.get<Array<StudentsRecords>>('/api/studentsRecords');
    }

    addStudent(student: StudentsRecords) {
        return this.http.post<StudentsRecords>('/api/studentsRecords', student);
    }

    updateStudent(student: StudentsRecords) {
        return this.http.put<StudentsRecords>(`/api/students/${student.id}`, student)
    }
}