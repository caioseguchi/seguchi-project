import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    HomeComponent,
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() technologies!: string[];
  @Input() buttonLink!: string;

  isExternalLink(): boolean {
    return this.buttonLink?.startsWith('http');
  }
}
