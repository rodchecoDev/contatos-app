import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  apiRoot: string;

  constructor(public http: HttpClient) {
    this.apiRoot = environment.api_url;
  }

  getCompanies(): Observable<any> {
    return this.http.get<Company[]>(this.apiRoot + 'company');
  }

  getAddress(cep: string): Observable<any> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json`);
  }
}
