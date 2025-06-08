import { Component } from '@angular/core';
import { GButtonComponent } from '../../components/g-button/g-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
