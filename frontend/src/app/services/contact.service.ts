import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  //Save Contact
  postContact(contact: any): Observable<any> {
    return this.http.post(BASIC_URL + '/api-contact/contact', contact);
  }

  //List of all contacts
  getAllContacts(): Observable<any> {
    return this.http.get(BASIC_URL + '/api-contact/contact');
  }

  //Contact by Id
  getContactById(id: number): Observable<any> {
    return this.http.get(BASIC_URL + '/api-contact/contact/' + id);
  }

  //Update
  updateContactById(id: number, contact: any): Observable<any> {
    return this.http.put(BASIC_URL + '/api-contact/contact/' + id, contact);
  }

  //Delete
  deleteContactById(id: number): Observable<any> {
    return this.http.delete(BASIC_URL + '/api-contact/contact/' + id);
  }
}
