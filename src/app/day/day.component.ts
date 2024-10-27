import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class DayComponent implements OnInit {
  day!: string;
  appointmentList: Appointment[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private storage: AppointmentStorageService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.day = params.get('day')!;
    });

    this.appointmentList = this.storage.getAppointments(this.day);
  }

  goToAddNewAppointment() {
    this.router.navigate(['/add/' + this.day]);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.appointmentList, event.previousIndex, event.currentIndex);
    this.storage.setAppointments(this.day, this.appointmentList)
  }

  delete(index: number) {
    this.storage.deleteAppointment(this.day, index);
    this.appointmentList = this.storage.getAppointments(this.day);
  }
}
