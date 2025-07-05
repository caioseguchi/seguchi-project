import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactRequest } from '../types/contact-request.types';
import { Contact } from '../types/contact.types';
import { UrltAPI } from '../types/url-api.types';
import { LoginResponse } from '../types/login-response.types';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/users'; // Base da sua API
  private baseURL: string = '';

  constructor(private http: HttpClient) {
    this.baseURL = UrltAPI.BASE_URL;
  }

  getPokemon(pokemonNmae: string) {
    console.log(this.baseURL);
  }

  createContact(contact: ContactRequest): Observable<Contact> {
    const userId = Number(sessionStorage.getItem('userId'));
    return this.http.post<Contact>(
      `${this.apiUrl}/${userId}/contacts`,
      contact
    );
  }

  getAllContacts(): Observable<Contact[]> {
    const userId = Number(sessionStorage.getItem('userId'));
    return this.http.get<Contact[]>(`${this.apiUrl}/${userId}/contacts`);
  }

  deleteContactById(contactId: number): Observable<void> {
    const userId = Number(sessionStorage.getItem('userId'));
    return this.http.delete<void>(
      `${this.apiUrl}/${userId}/contacts/${contactId}`
    );
  }

  getContactById(contactId: number): Observable<Contact> {
    const userId = Number(sessionStorage.getItem('userId'));
    return this.http.get<Contact>(
      `${this.apiUrl}/${userId}/contacts/${contactId}`
    );
  }

  updateContactById(
    contactId: number,
    contact: ContactRequest
  ): Observable<Contact> {
    const userId = Number(sessionStorage.getItem('userId'));
    return this.http.put<Contact>(
      `${this.apiUrl}/${userId}/contacts/${contactId}`,
      contact
    );
  }
}
