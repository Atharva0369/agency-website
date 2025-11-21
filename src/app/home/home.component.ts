import { Component } from '@angular/core';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TestimonialsComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
