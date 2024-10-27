import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentStorageService } from '../appointment-storage.service';
import { Appointment } from '../day/day.component';

@Component({
  selector: 'app-add.appointment',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add.appointment.component.html',
  styleUrl: './add.appointment.component.css'
})
export class AddAppointmentComponent {
  myForm: FormGroup;
  day!: string;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private storage: AppointmentStorageService) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.day = params.get('day')!;
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      let appointment: Appointment = {
        day: this.day,
        name: this.myForm.value.name
      }

      this.storage.addAppointment(this.day, appointment);

      this.router.navigate(['/day/' + this.day]);
    }
  }

}
