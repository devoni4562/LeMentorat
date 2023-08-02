import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../../services/article/article.service";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit
{

  articleId!: number;
  article: any;
  protected readonly scrollTo = scrollTo;

  constructor(private articleService: ArticleService,
              private viewportScroller: ViewportScroller)
  {
  }

  ngOnInit()
  {
    console.log(this.articleService.getSelectedArticle());
    this.articleId = this.articleService.getSelectedArticle();
    this.articleService.getArticleById(this.articleId).subscribe((data: any[]) =>
    {
      console.log(data);
      this.article = data;
    });
  }

  scrollToAnchor(anchor: string)
  {
    this.viewportScroller.scrollToAnchor(anchor);
  }

}
