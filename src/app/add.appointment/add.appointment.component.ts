import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required], // Name field is required
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value); // Handle the form submission
    }
  }

}
