import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';

import { routes } from './app.routes';
import { studentsReducer } from './state/students.reducer';
import { StudentsRecordsEffects } from './state/students-records.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideEffects(StudentsRecordsEffects),
    provideState({
      name: 'students',
      reducer: studentsReducer
    }),
    provideStore({
      route: routerReducer
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
    provideRouterStore()
  ]
};
