import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-get-all',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact-get-all.component.html',
  styleUrl: './contact-get-all.component.scss',
})
export class ContactGetAllComponent {
  contacts: any[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.getAllContact();
  }

  getAllContact() {
    this.contactService.getAllContacts().subscribe((res) => {
      console.log(res);
      this.contacts = res;
    });
  }
}
