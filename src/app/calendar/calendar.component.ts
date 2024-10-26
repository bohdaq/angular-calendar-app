import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  imports: [NgFor],
  standalone: true
})
export class CalendarComponent implements OnInit {
  currentMonth: moment.Moment;
  daysInMonth: moment.Moment[] = [];

  constructor() {
    this.currentMonth = moment();
  }

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    const startOfMonth = this.currentMonth.clone().startOf('month').startOf('week');
    const endOfMonth = this.currentMonth.clone().endOf('month').endOf('week');

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
}