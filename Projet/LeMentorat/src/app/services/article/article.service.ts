import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService
{

  private apiUrl = 'http://localhost:8000/api/admin/articles/';

  constructor(private http: HttpClient)
  {
  }

  getAllArticles()
  {
    return this.http.get<any>(this.apiUrl);
  }

  createNewArticle(formData: any)
  {
    return this.http.post<any>(this.apiUrl + 'new', formData);
  }
}
