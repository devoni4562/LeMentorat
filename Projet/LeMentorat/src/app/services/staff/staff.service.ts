import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StaffService
{

  private apiUrl = 'http://localhost:8000/members/staff';

  constructor(private http: HttpClient)
  {
  }

  getStaff()
  {
    return this.http.get<any[]>(this.apiUrl);
  }
}
