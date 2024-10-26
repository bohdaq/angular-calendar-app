import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';
import { AddAppointmentComponent } from './add.appointment/add.appointment.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
    { path: 'home', loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule) },
    { path: 'day', component: DayComponent },
    { path: 'add', component: AddAppointmentComponent },
];
