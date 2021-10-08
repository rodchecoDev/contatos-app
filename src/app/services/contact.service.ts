import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiRoot: string;

  constructor(public http: HttpClient) {
    this.apiRoot = environment.api_url;
  }

  getContacts(): Observable<any> {
    return this.http.get<Contact[]>(this.apiRoot + 'contact');
  }
}
