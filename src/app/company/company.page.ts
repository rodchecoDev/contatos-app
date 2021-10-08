import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company.model';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: 'company.page.html',
  styleUrls: ['company.page.scss']
})
export class CompanyPage implements OnInit {

  companies: Company[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(res => {
      this.companies = res;
    })
  }

}
