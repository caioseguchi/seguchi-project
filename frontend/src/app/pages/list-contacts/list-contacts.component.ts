import { Component, OnInit } from '@angular/core';

import { Contact } from '../../types/contact.types';
import { ListService } from '../../services/list.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-contacts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-contacts.component.html',
  styleUrl: './list-contacts.component.scss',
})
export class ListContactsComponent implements OnInit {
  contacts: Contact[] = []; // Stores the list of contacts

  constructor(private listService: ListService) {}

  // Lifecycle hook that runs when the component is initialized
  ngOnInit(): void {
    // Get the userId from session storage (previously saved during login)
    const userId = Number(sessionStorage.getItem('userId'));

    // Call the service to get the list of contacts
    this.listService.listContacts(userId).subscribe({
      next: (data) => {
        this.contacts = data;
      },

      // Store contacts in the component variable
      error: (err) => {
        console.error('Error ao buscar contato:', err); //Handle error
      },
    });
  }
}
