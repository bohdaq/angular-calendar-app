import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent {
  day!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.day = params.get('day')!; // Get the user ID from the route
      // You can now use the userId to fetch user data or perform other actions
    });
  }
}
