import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentStorageService } from '../appointment-storage.service';

export interface Appointment {
  day: string;
  name: string;
}

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [MatListModule, MatButton, NgFor, CdkDropList, CdkDrag],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent {
  day!: string;
  appointmentList: Appointment[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private storage: AppointmentStorageService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.day = params.get('day')!; // Get the user ID from the route
      // You can now use the userId to fetch user data or perform other actions
    });

    this.appointmentList = this.storage.getAppointments(this.day);
  }

  goToAddNewAppointment() {
    console.log('add');
    this.router.navigate(['/add/' + this.day]); // Navigate to the user profile
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.appointmentList, event.previousIndex, event.currentIndex);
    let json: string = localStorage['appointmentList'] || '{}';
    let appointmentList = JSON.parse(json) || {};
    appointmentList[this.day].items = this.appointmentList;
    localStorage.setItem('appointmentList', JSON.stringify(appointmentList));
  }

  delete(index: number) {
    console.log('delete', index);
    this.appointmentList.splice(index, 1);
    let json: string = localStorage['appointmentList'] || '{}';
    let appointmentList = JSON.parse(json) || {};
    appointmentList[this.day].items = this.appointmentList;
    localStorage.setItem('appointmentList', JSON.stringify(appointmentList));
  }
}
