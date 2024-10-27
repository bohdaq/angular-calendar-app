import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  imports: [NgFor, RouterLink, MatButton, NgIf],
  standalone: true
})
export class CalendarComponent implements OnInit {
  currentMonth: moment.Moment;
  daysInMonth: moment.Moment[] = [];


  constructor(private router: Router) {
    this.currentMonth = moment();
  }

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    const startOfMonth = this.currentMonth.clone().startOf('month').startOf('week');
    let endOfMonth = this.currentMonth.clone().endOf('month').endOf('week').add(1, 'day');

    this.daysInMonth = [];
    const day = startOfMonth.clone();
    while (day.isBefore(endOfMonth, 'day')) {
      this.daysInMonth.push(day.clone());
      day.add(1, 'day');
    }
  }

  changeMonth(direction: number): void {
    this.currentMonth.add(direction, 'month');
    this.generateCalendar();
  }

  goToDay(day: string) {
    this.router.navigate(['/day/', day]);
  }

  areThereAppointments(day: string) {
    let json: string = localStorage['appointmentList'] || '{}';
    let appointmentList = JSON.parse(json) || {};
    return appointmentList[day] && appointmentList[day].items.length > 0
  }
}