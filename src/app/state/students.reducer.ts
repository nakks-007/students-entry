import { createReducer, on } from "@ngrx/store";
import { StudentsRecords } from "./students-records";
import * as Actions from "./students-records.action";

export const initState: { studentsRecords: StudentsRecords[] } = {
    studentsRecords: [{
        name: "Ananya Balaji",
        city: "Chennai",
        country: "India",
        subject: "Medical Laboratory Technology",
        passportDeclaration: "Yes",
        fitnessDeclaration: "Fit",
        courseName: "B.Sc MLT",
        date: "10-10-2010",
        state: "Tamil Nadu",
        subjects: "Pathology, Biochemistry",
        street: "21 Perambur High Road, Perambur",
        email: "ananya.b@email.com",
        phone: "9234567890",
        postalCode: 600011
    }]
};

export const studentsReducer = createReducer(
    initState,
    on(Actions.callStudentsRecordsApiSuccess, (state: any, { payload }: any) => ({ ...state, studentsRecords: payload }))
);