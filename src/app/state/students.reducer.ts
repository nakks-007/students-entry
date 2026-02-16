import { createReducer } from "@ngrx/store";
import { StudentsRecords } from "./students-records";

export const initState: ReadonlyArray<StudentsRecords> = [{
    name: 'nameData',
    city: 'cityData',
    country: 'countryData',
    subject: 'subjectData',
    passportDeclaration: 'passportData',
    fitnessDeclaration: 'fitnessData',
    courseName: 'courseNameData',
    date: '01-01-2001',
    state: 'stateData',
    subjects: 'subjectsData',
    street: 'streetData',
    email: 'emailData',
    phone: 'phoneData',
    postalCode: 123456,
}];

export const studentsReducer = createReducer(
    initState
)