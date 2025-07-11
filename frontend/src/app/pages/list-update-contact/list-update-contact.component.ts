import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ListService } from '../../services/list.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Contact } from '../../types/contact.types';

@Component({
  selector: 'app-list-update-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './list-update-contact.component.html',
  styleUrl: './list-update-contact.component.scss',
})
export class ListUpdateContactComponent implements OnInit {
  // Form group to handle form inputs and validation
  contactUpdateForm!: FormGroup;
  userId!: number;
  contactId!: number;

  constructor(
    private fb: FormBuilder,
    private listService: ListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Build the form with validation
    this.contactUpdateForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required]],
    });

    // Get userId and contactId from the route parameters
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.contactId = Number(this.route.snapshot.paramMap.get('contactId'));

    // Fetch the contact from the backend
    this.listService.getContactById(this.contactId).subscribe({
      next: (contact: Contact) => {
        // Populate the form with the existing contact data
        this.contactUpdateForm.patchValue({
          name: contact.contactName,
          email: contact.contactEmail,
          phone: contact.contactPhone,
        });
      },
      error: (err) => {
        console.error('Error loading contact:', err);
        alert('Failed to load contact');
      },
    });
  }

  updateContact(): void {
    // Stop if the form is invalid
    if (this.contactUpdateForm.invalid) {
      console.warn('Form is invalid');
      return;
    }

    // Extract form data
    const updatedData = {
      contactName: this.contactUpdateForm.value.name,
      contactEmail: this.contactUpdateForm.value.email,
      contactPhone: this.contactUpdateForm.value.phone,
    };

    // Send update request to backend
    this.listService.updateContact(this.contactId, updatedData).subscribe({
      next: (res) => {
        console.log('Contact updated:', res);
        this.router.navigateByUrl('/list');
      },
      error: (err) => {
        console.error('Update error:', err);
        alert('Failed to update contact');
      },
    });
  }
}
