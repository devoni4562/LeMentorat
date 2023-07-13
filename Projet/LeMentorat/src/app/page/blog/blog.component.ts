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

  constructor(private articleService: ArticleService)
  {
  }

  ngOnInit()
  {
    // this.articleService.getAllArticles().subscribe((data: any[]) =>
    // {
    //   this.articles = data;
    // });
  }

}
