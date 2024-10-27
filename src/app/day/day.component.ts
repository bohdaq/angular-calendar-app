import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [MatListModule, MatButton],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent {
  day!: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.day = params.get('day')!; // Get the user ID from the route
      // You can now use the userId to fetch user data or perform other actions
    });
  }

  goToAddNewAppointment() {
    console.log('add');
    this.router.navigate(['/add']); // Navigate to the user profile
  }
}
