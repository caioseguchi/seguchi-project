import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../types/contact.types';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  apiUrl: string = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  //Helper method to construct the HTTP headers with JWT token
  private getAuthHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('auth-token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  // GET /users/{userId}/contacts
  listContacts(userId: number): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}/${userId}/contacts`, {
      headers: this.getAuthHeaders(),
    });
  }

  //Create a new contact for a specific user
  //POST /users/{userId}/contacts
  createContact(contactData: any): Observable<Contact> {
    const userId = sessionStorage.getItem('userId');
    return this.http.post<Contact>(
      `${this.apiUrl}/${userId}/contacts`,
      contactData,
      { headers: this.getAuthHeaders() }
    );
  }

  //Fetch a contact by its ID
  //GET /users/{userId}/contacts/{contactId}
  getContactById(contactId: number): Observable<Contact> {
    const userId = sessionStorage.getItem('userId');
    return this.http.get<Contact>(
      `${this.apiUrl}/${userId}/contacts/${contactId}`,
      { headers: this.getAuthHeaders() }
    );
  }

  //Update an existing contact
  //PUT /users/{userId}/contacts/{contactId}
  updateContact(contactId: number, contactData: any): Observable<Contact> {
    const userId = sessionStorage.getItem('userId');
    return this.http.put<Contact>(
      `${this.apiUrl}/${userId}/contacts/${contactId}`,
      contactData,
      { headers: this.getAuthHeaders() }
    );
  }

  //Delete a contact by its ID
  //DELETE /users/{userId}/contacts/{contactId}
  deleteContact(contactId: number): Observable<void> {
    const userId = sessionStorage.getItem('userId');
    return this.http.delete<void>(
      `${this.apiUrl}/${userId}/contacts/${contactId}`,
      { headers: this.getAuthHeaders() }
    );
  }
}
