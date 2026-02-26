import { createReducer, on } from "@ngrx/store";
import { StudentsRecords } from "./students-records.model";
import * as Actions from "./students-records.action";
import { initialState, adapter } from "./students-records";

export const studentsReducer = createReducer(
    initialState,
    on(Actions.callStudentsRecordsApiSuccess,
        (state: any, { payload }: any) => {
            return adapter.addMany(payload, state);
        }
    )
);