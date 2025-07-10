import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ListService } from '../../services/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-post-contact',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './list-post-contact.component.html',
  styleUrl: './list-post-contact.component.scss',
})
export class ListPostContactComponent implements OnInit {
  // Form group to handle form inputs and validation
  contactPostForm!: FormGroup;

  constructor(
    private listService: ListService, // Service responsible for API calls
    private fb: FormBuilder, // FormBuilder used to create reactive forms
    private router: Router // Router used to navigate between pages
  ) {}

  // Lifecycle hook that runs when the component is initialized
  ngOnInit() {
    // Create a reactive form with validation rules
    this.contactPostForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  // Method triggered when the form is submitted
  contactPost(): void {
    // If the form is invalid, show a warning and exit
    if (this.contactPostForm.invalid) {
      console.warn('Invalid form');
      return;
    }

    // Prepare the data object from the form values
    const contactData = {
      contactName: this.contactPostForm.value.name,
      contactEmail: this.contactPostForm.value.email,
      contactPhone: this.contactPostForm.value.phone,
    };

    // Call the service to create a new contact
    this.listService.createContact(contactData).subscribe({
      next: (res) => {
        console.log('Contact created:', res);
        // Navigate to the contact list page after successful creation
        this.router.navigateByUrl('/list');
      },
      error: (err) => {
        console.error('Error creating contact:', err);
        alert('Error saving contact. Please try again.');
      },
    });
  }
}
