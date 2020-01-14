import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Company} from './models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  host = "http://localhost:8080/";
  host2 = "http://localhost:8081/";
  constructor(private http: HttpClient) { }

  getCompanies(){
    return this.http.get<Company[]>(this.host+"companies");
  }

  getAllFiles(){
    return this.http.get(this.host2+"download/files")
  }

  getNbrCommandsByMonth(year:number){
    return this.http.get(this.host+"commands/"+year);
  }
}
