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

  article: any;
  paragraphs!: any[];
  protected readonly scrollTo = scrollTo;

  constructor(private articleService: ArticleService,
              private viewportScroller: ViewportScroller)
  {
  }

  ngOnInit()
  {

    this.article = this.articleService.getSelectedArticle();
    console.log(typeof this.article.id);
    this.articleService.getParagraphByArticle(this.article.id).subscribe((data: any[]) =>
    {
      this.paragraphs = data;
    });
  }

  scrollToAnchor(anchor: string)
  {
    this.viewportScroller.scrollToAnchor(anchor);
  }

}
