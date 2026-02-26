import { createAction, props } from "@ngrx/store";
import { StudentsRecords } from "./students-records.model";

export const actionsList = {
    callStudentsRecordsApi: "[ Students Table Component ] Call Students Records API",
    callStudentsRecordsApiSuccess: "[ Students Table Component ] Call Students Records API Success",
}

export const callStudentsRecordsApi = createAction(actionsList.callStudentsRecordsApi);
export const callStudentsRecordsApiSuccess = createAction(actionsList.callStudentsRecordsApiSuccess, props<{ payload: StudentsRecords[] }>());