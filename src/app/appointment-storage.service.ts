import { Injectable } from '@angular/core';
import { Appointment } from './day/day.component';

@Injectable({
  providedIn: 'root'
})
export class AppointmentStorageService {

  constructor() { }

  getAppointments(day: string): Appointment[] {
    let json: string = localStorage['appointmentList'] || '{}';
    let appointmentList = JSON.parse(json) || {};

    if (!appointmentList[day]) {
      appointmentList[day] = {
        items: []
      }
    }

    let appointments: Appointment[] = appointmentList[day].items;
    return appointments;
  }

  addAppointment(day: string, appointment: Appointment) {

    let json: string = localStorage['appointmentList'] || '{}';
    let appointmentList = JSON.parse(json) || {};

    if (!appointmentList[day]) {
      appointmentList[day] = {
        items: []
      }
    }

    appointmentList[day].items.push(appointment);
    localStorage.setItem('appointmentList', JSON.stringify(appointmentList));
  }
}
