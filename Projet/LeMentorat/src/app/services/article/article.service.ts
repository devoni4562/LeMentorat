import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormArray} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ArticleService
{

  private apiUrl = 'https://localhost:8000/api/article/';
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
    console.log(form);
    const articleFormData: FormData = new FormData();

    articleFormData.append('category', form.get('category').value);
    articleFormData.append('writterId', form.get('writterId').value);
    articleFormData.append('title', form.get('title').value);
    articleFormData.append('video', form.get('video').value);

    const imageinput = document.getElementById('imgForm') as HTMLInputElement;
    const imageFile = imageinput?.files?.[0];
    if (imageFile)
    {
      articleFormData.append('image', imageFile, imageFile.name);
    }

    const paragraphsArray = form.get('paragraphs') as FormArray;
    const paragraphsData = paragraphsArray.controls.map((paragraphControl, index) =>
    {

      const paragraphImageInput = document.getElementById('paragraphImg' + index) as HTMLInputElement;
      const paragraphImageFile = paragraphImageInput?.files?.[0];


      return {
        paragraphTitle: paragraphControl.get('paragraphTitle')?.value,
        paragraphImage: [paragraphImageFile, paragraphImageFile?.name],
        paragraphText: paragraphControl.get('paragraphText')?.value,
        paragraphLink: paragraphControl.get('paragraphLink')?.value,
        paragraphLinkText: paragraphControl.get('paragraphLinkText')?.value

      };

    });
    articleFormData.append('paragraphs', JSON.stringify(paragraphsData));

    articleFormData.forEach((value) =>
    {
      console.log(value);
    });
  }

  getForm()
  {
  }
}
