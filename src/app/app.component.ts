import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarComponent, RouterLink, MatToolbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calendar-app';
}
