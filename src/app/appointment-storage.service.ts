import { Injectable } from '@angular/core';
import { Appointment } from './day/day.component';

@Injectable({
  providedIn: 'root'
})
export class AppointmentStorageService {

  getAppointments(day: string): Appointment[] {
    let appointmentList = this.populateEmptyFields(day);

    let appointments: Appointment[] = appointmentList[day].items;
    return appointments;
  }

  addAppointment(day: string, appointment: Appointment) {
    let appointmentList = this.populateEmptyFields(day);

    appointmentList[day].items.push(appointment);
    localStorage.setItem('appointmentList', JSON.stringify(appointmentList));
  }

  setAppointments(day: string, appointments: Appointment[]) {
    let appointmentList = this.populateEmptyFields(day);

    appointmentList[day].items = appointments;
    localStorage.setItem('appointmentList', JSON.stringify(appointmentList));
  }

  deleteAppointment(day: string, index: number) {
    let appointmentList = this.populateEmptyFields(day);

    appointmentList[day].items.splice(index, 1);
    localStorage.setItem('appointmentList', JSON.stringify(appointmentList));
  }

  getCalendar() {
    let json: string = localStorage['appointmentList'] || '{}';
    let appointmentList = JSON.parse(json) || {};

    return appointmentList;
  }

  populateEmptyFields(day: string) {
    let appointmentList = this.getCalendar();

    if (!appointmentList[day]) {
      appointmentList[day] = {
        items: []
      }
    }

    return appointmentList;
  }
}
