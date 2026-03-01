import { createReducer, on } from "@ngrx/store";
import { StudentsRecords } from "./students-records.model";
import * as Actions from "./students-records.action";
import { initialState, adapter } from "./students-records";
import { addStudentSuccess } from "./students-records.action";

export const studentsReducer = createReducer(
    initialState,
    on(Actions.callStudentsRecordsApiSuccess,
        (state: any, { payload }: any) => {
            return adapter.addMany(payload, state);
        }
    ),

    on(addStudentSuccess, (state, { student }) =>
        adapter.addOne(student, state)
    ),
);