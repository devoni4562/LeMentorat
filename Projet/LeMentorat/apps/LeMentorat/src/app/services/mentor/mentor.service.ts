import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MentorService {
  private apiUrl = 'http://localhost:8000/api/mentors';

  constructor(private http: HttpClient) {}

  getMentors() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
