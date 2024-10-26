import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './calendar-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FeatureRoutingModule // Import the routing module
    ]
})
export class CalendarModule { }