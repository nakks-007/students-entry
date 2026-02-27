import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentTableComponent } from './students-table/students-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];
