import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-post',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact-post.component.html',
  styleUrl: './contact-post.component.scss',
})
export class ContactPostComponent implements OnInit {
  contactPostForm!: FormGroup;

  constructor(
    private contactService: ContactService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.contactPostForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required]],
    });
  }

  contactPost(): void {
    if (this.contactPostForm.invalid) {
      console.warn('Formulário inválido');
      return;
    }

    const contactData = {
      name: this.contactPostForm.value.name,
      email: this.contactPostForm.value.email,
      phone: this.contactPostForm.value.phone,
    };

    this.contactService.createContact(contactData).subscribe({
      next: (res) => {
        console.log('Contato criado:', res);
        this.router.navigateByUrl('/contacts');
      },
      error: (err) => {
        console.error('Erro ao criar contato:', err);
        alert('Erro ao salvar contato. Verifique os dados e tente novamente.');
      },
    });
  }
}
