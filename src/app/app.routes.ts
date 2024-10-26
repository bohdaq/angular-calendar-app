import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';
import { AddAppointmentComponent } from './add.appointment/add.appointment.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
    { path: 'home', component: CalendarComponent },
    { path: 'day', component: DayComponent },
    { path: 'add', component: AddAppointmentComponent },
];
