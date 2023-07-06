import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService
{


  private apiUrl = 'http://localhost:8000/api/admin/category/';

  constructor(private http: HttpClient)
  {
  }

  getAllCategories()
  {
    return this.http.get<any>(this.apiUrl);
  }
}
