import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../services/article/article.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit
{
  articles: any[] = [];
  categories: string[] = [];

  constructor(private articleService: ArticleService)
  {
  }

  ngOnInit()
  {
    this.articleService.getAllArticles().subscribe((data: any[]) =>
    {
      this.articles = data;
      console.log(data.length);
    });

    this.articles.forEach(article =>
    {
      if (article.category)
      {
        if (!this.categories.includes(article.category.wording))
        {
          this.categories.push(article.category.wording);
        }
      }
    });

  }

}
