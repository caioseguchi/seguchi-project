import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { GButtonComponent } from '../../components/g-button/g-button.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, GButtonComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
