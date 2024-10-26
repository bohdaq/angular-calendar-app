import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';



@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    CalendarComponent
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
