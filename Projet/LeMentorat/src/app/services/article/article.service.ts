import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService
{

  private apiUrl = 'http://localhost:8000/api/article/';
  private selectedArticleId!: number;

  constructor(private http: HttpClient)
  {
    const storedArticleId = localStorage.getItem('selectedArticleId');
    this.selectedArticleId = storedArticleId ? parseInt(storedArticleId, 10) : 0;
  }

  setSelectedArticle(article: any)
  {
    this.selectedArticleId = article.id;
    localStorage.setItem('selectedArticleId', this.selectedArticleId.toString());
  }

  getSelectedArticle(): number
  {
    return this.selectedArticleId;
  }

  getAllArticles()
  {
    return this.http.get<any[]>(this.apiUrl);
  }

  getArticleById(id: number)
  {
    return this.http.get<any[]>(this.apiUrl + 'getArticle/' + id);
  }


  createNewArticle(form: any)
  {
    const articleFormData = new FormData();

    const categoryValue = form.get('category').value;

    if (categoryValue !== null)
    {
      articleFormData.append('category', categoryValue);
      console.log(articleFormData.get('category'));
    }

    const paragraphValue = form.get('paragraph').value;
    if (paragraphValue !== null)
    {
      articleFormData.append('paragraph', paragraphValue);
    }

    const writterIdValue = form.get('writterId').value;
    if (writterIdValue !== null)
    {
      articleFormData.append('writterId', writterIdValue);
    }

    const titleValue = form.get('title').value;
    if (titleValue !== null)
    {
      articleFormData.append('title', titleValue);
    }

    const imageinput = document.getElementById('imgForm') as HTMLInputElement;
    const imageFile = imageinput?.files?.[0];


    if (imageFile)
    {
      articleFormData.append('image', imageFile, imageFile.name);
      console.log(articleFormData.get('image'));
    }


    const videoValue = form.get('video').value;


    if (videoValue != null)
    {
      articleFormData.append('video', videoValue);
    }

    console.log(articleFormData.get('category'));

    return this.http.post<any>(this.apiUrl + 'new', articleFormData)
      .pipe(
        tap(response =>
        {
          console.log(response);
        })
      )
      .subscribe({
        next: () =>
        {
        },
        error: error =>
        {
          console.error(error);
        }
      });
  }
}
