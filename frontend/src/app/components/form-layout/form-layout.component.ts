import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-layout',
  standalone: true,
  imports: [],
  templateUrl: './form-layout.component.html',
  styleUrl: './form-layout.component.scss',
})
export class FormLayoutComponent {
  @Input() title: string = '';
  @Input() primaryBntText: string = '';
  @Input() secondaryBntText: string = '';
}
