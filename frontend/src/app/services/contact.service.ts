import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = ['http://localhost:8080'];

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  postContact(contact: any): Observable<any> {
    return this.http.post(BASIC_URL + '/api-contact', contact);
  }
}
