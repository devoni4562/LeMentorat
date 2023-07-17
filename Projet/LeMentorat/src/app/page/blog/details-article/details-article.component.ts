import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../../services/article/article.service";

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit
{

  article: any;

  constructor(private articleService: ArticleService)
  {
  }

  ngOnInit()
  {
    this.article = this.articleService.getSelectedArticle();
  }

}
