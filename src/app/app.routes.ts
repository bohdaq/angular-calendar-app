import { RouterModule, Routes } from '@angular/router';
import { DayComponent } from './day/day.component';
import { AddAppointmentComponent } from './add.appointment/add.appointment.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule) },
    { path: 'day/:day', component: DayComponent },
    { path: 'add/:day', component: AddAppointmentComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }