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

  ngOnInit(): void {
    this.contactService.getPokemon('Pikachu');
    this.getAllContacts();
  }

  getAllContacts(): void {
    this.contactService.getAllContacts().subscribe({
      next: (res) => {
        this.contacts = res;
        console.log('Contatos carregados:', res);
      },
      error: (err) => {
        console.error('Erro ao buscar contatos:', err);
        alert('Erro ao carregar contatos.');
      },
    });
  }

  deleteContact(id: number): void {
    this.contactService.deleteContactById(id).subscribe({
      next: () => {
        console.log('Contato deletado com sucesso');
        this.getAllContacts();
      },
      error: (err) => {
        console.error('Erro ao deletar contato:', err);
        alert('Erro ao deletar contato.');
      },
    });
  }

  trackByContactId(index: number, contact: any): number {
    return contact.contactId;
  }
}
