import { createAction, props } from "@ngrx/store";
import { StudentsRecords } from "./students-records.model";

export const actionsList = {
    callStudentsRecordsApi: "[ Students Table Component ] Call Students Records API",
    callStudentsRecordsApiSuccess: "[ Students Table Component ] Call Students Records API Success",
    callAddStudentsApi: "[Students Detail Component] Add Student API",
    callAddStudentsAPISuccess: "[Students Detail Component] Add Student API Success",
    callAddStudentsAPIFailure: "[Students Detail Component] Add Student API Failure",
}

export const callStudentsRecordsApi = createAction(actionsList.callStudentsRecordsApi);
export const callStudentsRecordsApiSuccess = createAction(actionsList.callStudentsRecordsApiSuccess, props<{ payload: StudentsRecords[] }>());
export const addStudent = createAction(actionsList.callAddStudentsApi, props<{ student: StudentsRecords }>());
export const addStudentSuccess = createAction(actionsList.callAddStudentsAPISuccess, props<{ student: StudentsRecords }>());
export const addStudentFailure = createAction(actionsList.callAddStudentsAPIFailure, props<{ error: any }>());