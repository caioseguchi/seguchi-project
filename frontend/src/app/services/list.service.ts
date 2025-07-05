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

  // Method to fetch contacts for a specific user
  listContacts(userId: number): Observable<Contact[]> {
    // Retrieve the JWT token from session storage
    const token = sessionStorage.getItem('auth-token');

    // Set the Authorization header with the Bearer token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    // Make a GET request to the backend to fetch user contacts
    return this.http.get<Contact[]>(`${this.apiUrl}/${userId}/contacts`, {
      headers,
    });
  }
}
