import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() disablePrimaryBtn: boolean = true;
  @Output('submit') onSubmit = new EventEmitter();

  @Output('navigate') onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }
}
