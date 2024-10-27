import { Injectable } from '@angular/core';
import { Appointment } from './day/day.component';

@Injectable({
  providedIn: 'root'
})
export class AppointmentStorageService {

  getAppointments(day: string): Appointment[] {
    const appointmentList = this.populateEmptyFields(day);

    const appointments: Appointment[] = appointmentList[day].items;
    return appointments;
  }

  addAppointment(day: string, appointment: Appointment) {
    const appointmentList = this.populateEmptyFields(day);

    appointmentList[day].items.push(appointment);
    localStorage.setItem('appointmentList', JSON.stringify(appointmentList));
  }

  setAppointments(day: string, appointments: Appointment[]) {
    const appointmentList = this.populateEmptyFields(day);

    appointmentList[day].items = appointments;
    localStorage.setItem('appointmentList', JSON.stringify(appointmentList));
  }

  deleteAppointment(day: string, index: number) {
    const appointmentList = this.populateEmptyFields(day);

    appointmentList[day].items.splice(index, 1);
    localStorage.setItem('appointmentList', JSON.stringify(appointmentList));
  }

  getCalendar() {
    const json: string = localStorage['appointmentList'] || '{}';
    const appointmentList = JSON.parse(json) || {};

    return appointmentList;
  }

  populateEmptyFields(day: string) {
    const appointmentList = this.getCalendar();

    if (!appointmentList[day]) {
      appointmentList[day] = {
        items: []
      }
    }

    return appointmentList;
  }
}
