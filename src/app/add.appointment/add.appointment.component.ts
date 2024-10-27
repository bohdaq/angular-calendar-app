import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.myForm = this.fb.group({
      name: ['', Validators.required], // Name field is required
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.day = params.get('day')!; // Get the user ID from the route
      // You can now use the userId to fetch user data or perform other actions
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value); // Handle the form submission
      let appointment = {
        day: this.day,
        name: this.myForm.value.name
      }

      let json: string = localStorage['appointmentList'] || '{}';
      let appointmentList = JSON.parse(json) || {};

      if (!appointmentList[this.day]) {
        appointmentList[this.day] = {
          items: []
        }
      }

      appointmentList[this.day].items.push(appointment);
      localStorage.setItem('appointmentList', JSON.stringify(appointmentList));

      console.log('appointmentList', appointmentList);

      this.router.navigate(['/day/' + this.day]);
    }
  }

}
