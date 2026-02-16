import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { studentsReducer } from './state/students.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideState({
      name: 'studentsRecords',
      reducer: studentsReducer
    }),
    provideStore({

    }),
    provideStoreDevtools({ maxAge: 25, logOnly: false })
  ]
};
