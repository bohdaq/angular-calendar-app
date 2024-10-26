import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from './calendar/calendar.module';
import { AppComponent } from './app.component';



@NgModule({
    declarations: [AppComponent],
    imports: [
        CommonModule,
        CalendarModule
    ],
    exports: [
        AppModule
    ]
})
export class AppModule { }
